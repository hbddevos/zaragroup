import Drapeau from "./Drapeau";
const items = [
  "drapeaux/togo.jpg",
  "drapeaux/bf.jpg",
  "drapeaux/chine.jpg",
  "drapeaux/european.jpg",
  "drapeaux/ci.jpg",
  "drapeaux/uea.jpg",
];
const Hero = () => {
  return (
    <div className="max-w-sm py-32 mx-auto mt-px text-left sm:max-w-md px-4 md:max-w-none md:text-center bg-[url('images/header.jpg')] bg-no-repeat bg-cover">
      <h1 className="text-4xl font-bold leading-10 tracking-tight text-center text-blue-800  sm:text-4xl md:text-7xl lg:text-8xl">
        Zara Group Vos <br className="hidden sm:block" /> Yeux Dans Le Monde Des
        Affaires
      </h1>
      <div className="mx-auto mt-5 text-[#f1f1f1] md:mt-8 md:max-w-lg md:text-center md:text-xl">
        Simplifying the creation of landing pages, blog pages, application pages
        and so much more!
      </div>
      <div className="flex flex-col items-center justify-center mt-8 space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4">
        <span className="relative inline-flex w-full md:w-auto">
          <a
            href="#_"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            WhatsApp
          </a>
        </span>
        <span className="relative inline-flex w-full md:w-auto">
          <a
            href="#_"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-gray-900 bg-gray-100 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
          >
            Explorer
          </a>
        </span>
      </div>
      <Drapeau items={items} speed={10} />
      {/* <section className="bg-gray-300 pt-7 pb-14">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 className="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7">
            Nos Pays partenaire d'affaires
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8">
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://cdn.devdojo.com/tails/images/disney-plus.svg"
                alt="Disney Plus"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://cdn.devdojo.com/tails/images/google.svg"
                alt="Google"
                className="block object-contain h-9"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://cdn.devdojo.com/tails/images/hubspot.svg"
                alt="Hubspot"
                className="block object-contain h-9"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://cdn.devdojo.com/tails/images/youtube.svg"
                alt="Youtube"
                className="block object-contain h-7 lg:h-8"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img
                src="https://cdn.devdojo.com/tails/images/slack.svg"
                alt="Slack"
                className="block object-contain h-9"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img
                src="https://cdn.devdojo.com/tails/images/shopify.svg"
                alt="Shopify"
                className="block object-contain h-9"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
