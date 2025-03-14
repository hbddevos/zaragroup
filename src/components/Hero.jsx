/* eslint-disable react/no-unescaped-entities */
// import Drapeau from "./Drapeau";

import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div
      className="max-w-sm py-32 mx-auto mt-px text-left sm:max-w-md px-4 md:max-w-none md:text-center"
      style={{
        backgroundImage: "url('images/hero.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold leading-10 tracking-tight text-center text-white  sm:text-4xl md:text-8xl lg:text-9xl">
        Zara Group <br className="sm:block" />
        <span className="text-2xl md:text-6xl font-medim -mt-2">
          Vos Yeux Dans Le Monde Des Affaires
        </span>
      </h1>
      <div className="mx-auto mt-5 text-[#f1f1f1] md:mt-8 md:max-w-lg md:text-center md:text-xl">
        Simplifiez vos oérations avec l'etranger en démistifiant l'import export
        pour vous et vous rendat services.
      </div>
      <div className="flex flex-col items-center justify-center mt-8 space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4">
        <span className="relative inline-flex w-full md:w-auto">
          <a
            href="https://wa.me/92407089"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 bg-gray-100 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          >
            <img src="/images/whatsapp.png" className="size-6 mr-2" alt="" />
            WhatsApp
          </a>
        </span>
        <span className="relative inline-flex w-full md:w-auto">
          <NavLink
            to="/services"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-indigo-900 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800"
          >
            Services
          </NavLink>
        </span>
      </div>

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
