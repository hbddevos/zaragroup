import { NavLink } from "react-router";

// eslint-disable-next-line react/prop-types
export default function Service({ texte, titre, image, className, link }) {
  return (
    <NavLink to={link} className={`${className} overflow-hidden flex flex-col items-center pb-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-100`}>
     {/* <div> */}
     <img
        className="object-cover w-full h-80 rounded-t-xl transition duration-200 group-hover:scale-105"
        src={image}
        alt=""
      />
     {/* </div> */}

      <h1 className="mt-4 text-2xl font-semibold text-gray-800 capitalize group-hover:slate-800">
        {titre}
      </h1>

      <p className="mt-2 text-gray-700 capitalize group-hover:text-gray-900 p-4 text-center">
        {texte}
      </p>
    </NavLink>
  );
}
