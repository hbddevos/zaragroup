import { useRef } from "react";
import useAnimatedText from "../hooks/useAnimetedText";

export default function Mission() {

  const titleRef = useRef(null);
  useAnimatedText(titleRef, { stagger: 80, threshold: 0.2 });
  return (
    <>
      <section id="mission" className="h-auto mt-8 bg-gray-50">
        <div className="px-10 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:text-center">
            <h1 ref={titleRef} className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
              {" "}
              Notre{" "}
              <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
                Mission
              </span>
              <br className="lg:block hidden" /> Pour Vous.{" "}
            </h1>
            <p className="px-0 mb-6 text-xl text-gray-600 md:text-2xl lg:px-24">
              {" "}
              Votre satisfaction est notre objectif. Le plus important pour nous
              c&#39;est de vous faciliter l&apos;accès aux marchés internationaux a
              tous.{" "}
            </p>
          </div>
        </div>
      </section>

      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide lg:text-4xl">
              Notre Histoire
            </h1>
            <p className="mt-4 text-xl">
              En seulement deux (02) ans nous avons accompagné plus de 120
              entrepreneurs et commerçant dans leur opérations d&apos;import-export
              partout dans le monde.nous sommes votre guide complet d`envoie de
              ou vers togo , Burkina Faso, cote d`ivoire. nous dénichons pour
              vous des marchandises ,des marchés adapté à vos besoins
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center -px-3 text-4xl">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3 font-bold">+ 2ans XP</span>
              </div>

              <div className="flex items-center -px-3 text-4xl">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3 font-bold">+120 Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="images/import.jpg"
            alt="glasses photo"
          />
        </div>
      </div>

    </>
  );
}
