function GalleryService({ imagesServices }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 relative bottom-0">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 gap-8 sm:mb-8 md:mb-12">
          <div className="text-center">
            <h2 className="text-[48px] font-bold text-gray-800">
              Gallery
            </h2>

            {/* <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Nos Preuves sociales
            </p> */}
          </div>

          {/* <a
            href="#"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More
          </a> */}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 relative">
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={`/images/services/${imagesServices[0]}`}
              loading="lazy"
              alt="image1"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              VR
            </span> */}
          </a>

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img 
              src={`/images/services/${imagesServices[1]}`}
              loading="lazy"
              alt="image2"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Tech
            </span> */}
          </a>

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={`/images/services/${imagesServices[2]}`}
              loading="lazy"
              alt="image3"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Dev
            </span> */}
          </a>

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={`/images/services/${imagesServices[3]}`}
              loading="lazy"
              alt="image4"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Retro
            </span> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default GalleryService;
