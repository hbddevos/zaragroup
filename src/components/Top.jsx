import { useState } from "react";

export default function Top() {
  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    setScroll(window.scrollY);

    // console.log(scroll);
  });

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  // console.log(scroll);
  return (
    <button
    title="Go to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 size-10 rounded-full bg-indigo-600 flex justify-center items-center p-2 ${
        scroll == 0 ? "hidden" : ""
      } shadow-2xl shadow-black z-30`}
    >
      <img src="/images/top.png" alt="" />
    </button>
  );
}
