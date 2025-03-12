export default function ImageGallery() {
  return (
    <>
      <div className="max-w-[84rem] w-full mx-auto relative z-20 py-20 px-4">
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-neutrl-900 sm:text-center mb-10"
        >
          Featured by popular YouTubers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[83rem] mx-auto group md:auto-rows-[20rem]">
          <a
            className="w-full relative group/bento md:col-span-2 object-left-top"
            href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
            target="__blank"
          >
            <div className="h-full w-full absolute inset-0 bg-black opacity-0 group-hover/bento:opacity-30 rounded-lg transition-all duration-200" />
            <svg
              className="h-20 w-20 absolute z-10 inset-0 text-red-500 opacity-0 transition duration-200 m-auto group-hover/bento:opacity-100"
              height="24"
              width="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
            <img
              className="h-full w-full object-cover rounded-lg md:col-span-2 object-left-top"
              height={320}
              width={869}
              alt="Fireship"
              src="/images/cargo.jpg"
            />
          </a>
          <a
            className="w-full relative group/bento md:col-span-1 object-right-top"
            href="https://www.youtube.com/watch?v=e_QcQ6A8fNw&"
            target="__blank"
          >
            <div className="h-full w-full absolute inset-0 bg-black opacity-0 group-hover/bento:opacity-30 rounded-lg transition-all duration-200" />
            <svg
              className="h-20 w-20 absolute z-10 inset-0 text-red-500 opacity-0 transition duration-200 m-auto group-hover/bento:opacity-100"
              height="24"
              width="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
            <img
              className="h-full w-full object-cover rounded-lg md:col-span-1 object-right-top"
              height={320}
              width={427}
              alt="Josh Tried Coding"
              src="https://ui.aceternity.com/_next/image?url=https://assets.aceternity.com/josh.jpg&w=1080&q=75"
              srcSet="/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fjosh.jpg&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fjosh.jpg&w=1080&q=75 2x"
            />
          </a>
          <a
            className="w-full relative group/bento md:col-span-1 object-center"
            href="https://www.youtube.com/watch?v=cVKB5NQPiFA"
            target="__blank"
          >
            <div className="h-full w-full absolute inset-0 bg-black opacity-0 group-hover/bento:opacity-30 rounded-lg transition-all duration-200" />
            <svg
              className="h-20 w-20 absolute z-10 inset-0 text-red-500 opacity-0 transition duration-200 m-auto group-hover/bento:opacity-100"
              height="24"
              width="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
            <img
              className="h-full w-full object-cover rounded-lg md:col-span-1 object-center"
              height={320}
              width={427}
              alt="Chai Aur Code"
              src="/images/soja.jpg"
            />
          </a>
          <a
            className="w-full relative group/bento md:col-span-2 object-left-top"
            href="https://www.youtube.com/watch?v=IYLV26d0dOc&t"
            target="__blank"
          >
            <div className="h-full w-full absolute inset-0 bg-black opacity-0 group-hover/bento:opacity-30 rounded-lg transition-all duration-200" />
            <svg
              className="h-20 w-20 absolute z-10 inset-0 text-red-500 opacity-0 transition duration-200 m-auto group-hover/bento:opacity-100"
              height="24"
              width="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
            <img
              className="h-full w-full object-cover rounded-lg md:col-span-2 object-left-top"
              height={320}
              width={869}
              alt="Adrian Twarog"
              src="https://ui.aceternity.com/_next/image?url=https://assets.aceternity.com/xyz.jpg&w=1080&q=75"
              srcSet="/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fxyz.jpg&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fxyz.jpg&w=1080&q=75 2x"
            />
          </a>
          <a
            className="w-full relative group/bento md:col-span-2 object-center"
            href="https://www.youtube.com/watch?v=FTH6Dn3AyIQ&t=1s"
          >
            <div className="h-full w-full absolute inset-0 bg-black opacity-0 group-hover/bento:opacity-30 rounded-lg transition-all duration-200" />
            <svg
              className="h-20 w-20 absolute z-10 inset-0 text-red-500 opacity-0 transition duration-200 m-auto group-hover/bento:opacity-100"
              height="24"
              width="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
            <img
              className="h-full w-full object-cover rounded-lg md:col-span-2 object-center"
              height={320}
              width={869}
              alt="Javascript Mastery"
              src="https://ui.aceternity.com/_next/image?url=https://assets.aceternity.com/js-mastery.jpg&w=1080&q=75"
              srcSet="/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fjs-mastery.jpg&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fjs-mastery.jpg&w=1080&q=75 2x"
            />
          </a>
          <a
            className="w-full relative group/bento md:col-span-1 object-left-top"
            href="https://www.youtube.com/watch?v=1fj6XqyKxkE&t"
            target="__blank"
          >
            <div className="h-full w-full absolute inset-0 bg-black opacity-0 group-hover/bento:opacity-30 rounded-lg transition-all duration-200" />
            <svg
              className="h-20 w-20 absolute z-10 inset-0 text-red-500 opacity-0 transition duration-200 m-auto group-hover/bento:opacity-100"
              height="24"
              width="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
            <img
              className="h-full w-full object-cover rounded-lg md:col-span-1 object-left-top"
              height={320}
              width={427}
              alt="Raj Talks Tech"
              src="https://ui.aceternity.com/_next/image?url=https://assets.aceternity.com/raj.jpg&w=1080&q=75"
              srcSet="/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fraj.jpg&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fraj.jpg&w=1080&q=75 2x"
            />
          </a>
        </div>
      </div>
    </>
  );
}
