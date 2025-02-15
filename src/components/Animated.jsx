// import { useEffect, useRef } from "react";

// const AnimatedText = () => {
//     const textRef = useRef(null);

//     useEffect(() => {
//         const element = textRef.current;
//         if (!element) return;

//         // Split text into spans
//         const text = element.innerText;
//         element.innerHTML = text.split('').map(char => 
//             char.trim() ? `<span class='inline-block opacity-0 transition-opacity duration-700'>${char}</span>` : '<span>&nbsp;</span>'
//         ).join('');

//         // Animate text
//         setTimeout(() => {
//             [...element.children].forEach((span, index) => {
//                 setTimeout(() => {
//                     span.classList.add("opacity-100");
//                 }, index * 80);
//             });
//         }, 100);
//     }, []);

//     return (
//         <h1 ref={textRef} className="block pb-0.5 overflow-hidden text-3xl font-bold custom-font">
//             Pines UI Library
//         </h1>
//     );
// };

// export default AnimatedText;
import { useEffect, useRef } from "react";

const AnimatedText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        // Split text into spans
        const text = element.innerText;
        element.innerHTML = text.split('').map(char => 
            char.trim() ? `<span class='inline-block opacity-0 transition-opacity duration-700'>${char}</span>` : '<span>&nbsp;</span>'
        ).join('');

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                [...element.children].forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add("opacity-100");
                    }, index * 80);
                });
                observer.disconnect(); // Stop observing after animation starts
            }
        }, { threshold: 0.1 });

        observer.observe(element);
    }, []);

    return (
        <h1 ref={textRef} className="block pb-0.5 overflow-hidden text-3xl font-bold custom-font">
            Pines UI Library
        </h1>
    );
};

export default AnimatedText;
