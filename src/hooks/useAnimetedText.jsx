// import { useEffect } from "react";

// const useAnimatedText = (textRef, options = {}) => {
//     useEffect(() => {
//         const element = textRef.current;
//         if (!element) return;

//         // Split text into spans
//         const text = element.innerText;
//         element.innerHTML = text.split('').map(char => 
//             char.trim() ? `<span class='inline-block opacity-0 transition-opacity duration-700'>${char}</span>` : '<span>&nbsp;</span>'
//         ).join('');

//         const observer = new IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 [...element.children].forEach((span, index) => {
//                     setTimeout(() => {
//                         span.classList.add("opacity-100");
//                     }, index * (options.stagger || 80));
//                 });
//                 observer.disconnect(); // Stop observing after animation starts
//             }
//         }, { threshold: options.threshold || 0.1 });

//         observer.observe(element);
//     }, [textRef, options]);
// };

// export default useAnimatedText;


import { useEffect } from "react";

const useAnimatedText = (textRef, options = {}) => {
    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        // Split text into spans
        const text = element.innerText;
        element.innerHTML = text.split('').map(char => 
            char.trim() ? `<span class='inline-block opacity-0 transition-opacity duration-700'>${char}</span>` : '<span>&nbsp;</span>'
        ).join('');

        const animateText = () => {
            [...element.children].forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add("opacity-100");
                }, index * (options.stagger || 80));
            });
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animateText();
            } else {
                [...element.children].forEach(span => span.classList.remove("opacity-100"));
            }
        }, { threshold: options.threshold || 0.1 });

        observer.observe(element);
        return () => observer.disconnect();
    }, [textRef, options]);
};

export default useAnimatedText;
