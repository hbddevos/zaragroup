import { NavLink } from "react-router";

// eslint-disable-next-line react/prop-types
export default function Service({ texte, titre, image, className, link }) {
  return (
    <div className="relative">
      <NavLink
        to={link}
        className={`${className} overflow-hidden flex flex-col items-center pb-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-100 relative`}
      >
        <div className="relative h-auto">
          <img
            className="object-cover w-full h-80 rounded-t-xl transition duration-200 group-hover:scale-105"
            src={image}
            alt=""
          />

          <a
            href="https://wa.me/+22891500937 "
            className="absolute bottom-0 bg-white py-0 px-4 m-1 rounded-lg z-30 hover:bg-blue-100"
          >
            <svg
            className="group"
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-32 -32 96.00 96.00"
              height="48"
              width="48"
              fill="#008000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  className="st0 transition-colors duration-200 group-hover:stroke-white group-hover:fill-white"
                  style={{
                    fill: "none",
                    stroke: "#008000",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                  d="M17,1C9.3,1,3,7.3,3,15c0,3.4,1.3,6.6,3.3,9L4,31l7.3-3.2C13,28.6,15,29,17,29c7.7,0,14-6.3,14-14S24.7,1,17,1z "
                ></path>{" "}
                <g id="Page-1">
                  {" "}
                  <g id="Whatsapp" transform="translate(1.000000, 1.000000)">
                    {" "}
                    <path
                      id="Stroke-28"
                      className="st1"
                      style={{
                        fill: "none",
                        stroke: "#008000",
                        strokeWidth: "2",
                      }}
                      d="M23.7,19.1c0.3-0.9,0.3-1.6,0.2-1.8c-0.1-0.2-0.3-0.2-0.7-0.4c-0.4-0.2-2.2-1.1-2.5-1.2 c-0.3-0.1-0.7-0.1-0.9,0.3c-0.4,0.5-0.7,1-1,1.3c-0.2,0.2-0.6,0.3-0.9,0.1c-0.4-0.2-1.6-0.6-3-1.8c-1.1-1-1.8-2.2-2.1-2.6 c-0.2-0.4,0-0.6,0.2-0.8c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.3-0.3,0.4-0.6c0.1-0.2,0-0.5-0.1-0.7c-0.1-0.2-0.8-2-1.1-2.7 c-0.2-0.6-0.4-0.6-0.8-0.6c-0.1,0-0.3,0-0.4,0c-0.5,0-1,0.1-1.3,0.5C9.9,7.9,9,8.8,9,10.6c0,1.8,1.3,3.6,1.5,3.8 c0.2,0.2,2.6,4,6.3,5.6c2.9,1.2,3.8,1.1,4.4,1C22.2,20.7,23.4,20,23.7,19.1L23.7,19.1z"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>

        <h1 className="mt-4 text-2xl font-semibold text-gray-800 capitalize group-hover:slate-800">
          {titre}
        </h1>

        <p className="mt-2 text-gray-700 capitalize group-hover:text-gray-900 p-4 text-center">
          {texte}
        </p>
      </NavLink>
    </div>
  );
}
