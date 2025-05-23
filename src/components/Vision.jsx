

export default function Vision() {
  return (
    <section className="px-2 pt-32 md:px-0 bg-gray-50">
    <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span className="block">Notre <span className="block mt-1 text-purple-500 lg:inline lg:mt-0" data-primary="purple-500">Vision</span></span>
        </h1>
        <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl lg:max-w-3xl md:text-center">
        Démystifier l`import-export en vous rendant service et en étant aussi transparent que possible !
        </p>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto" data-primary="purple-500" data-rounded="rounded-md">
               Nos services
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
            {/* <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" data-rounded="rounded-md">
                Learn More
            </a> */}
        </div>
    </div>
    <div className="container items-center max-w-5xl px-5 mx-auto mt-16 text-center">
        {/* <img src="https://cdn.devdojo.com/images/november2020/hero-image.png" /> */}
        {/* <img src="images/bateau.gif" className="w-full rounded-xl"/> */}
        <video src="vid.mp4" className="w-full rounded-xl" autoPlay loop muted controls></video>
    </div>
</section>

  )
}
