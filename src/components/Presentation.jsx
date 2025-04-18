import { useRef } from "react";
import useAnimatedText from "../hooks/useAnimetedText";

export default function Presentation() {
  const textRef = useRef(null);
  useAnimatedText(textRef, { stagger: 80, threshold: 0.2 });

  return (
    // <!-- Container -->

    <div id="apropos" className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mt-8 md:mt-14">
      {/* <!-- Image Column --> */}

      <div className="w-full h-80 lg:w-1/2 lg:h-auto rounded-xl">
        <img
          className="h-full sm:h-[500px] w-full object-cover rounded-xl"
          src="images/fournisseur.jpg"
          alt="Bateau"
        />
      </div>

      {/* <!-- Close Image Column --> */}

      {/* <!-- Text Column --> */}

      <div className="max-w-lg bg-white rounded-xl md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* <!-- Text Wrapper --> */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 ref={textRef} className="text-2xl font-bold uppercase text-indigo-800 lg:text-4xl">
            Qui sommes-nous ?
          </h2>
          <p className="mt-4">
            Zara Group est une entreprise de commerce général, qui vous
            accompagne dans vos opérations d&apos;import-export. Il vous aide dans
            différents domaines et simplifie vos processus d&apos;acquisition ou de
            vente de marchandise.
          </p>
          {/* <!-- Button Container --> */}
          <div className="mt-8">
            <a
              href="#services"
              className="inline-block w-full text-center text-lg font-medium border-solid border-2 shadow-lg border-gray-600 py-4 px-10 hover:bg-indigo-500 hover:shadow-md md:w-64 rounded-xl transition-all hover:text-white"
            >
              Decouvrir nos servcies
            </a>
          </div>
        </div>
        {/* <!-- Close Text Wrapper --> */}
      </div>
      {/* <!-- Close Text Column --> */}
    </div>
  );
}
