import { NavLink } from "react-router";

// eslint-disable-next-line react/prop-types
export default function Service({ texte, titre, image, className, link }) {
  return (
    <NavLink to={link} className={`${className} flex flex-col items-center pb-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-100`}>
      <img
        className="object-contain w-full h-44 rounded-t-xl group-hover:scale-105"
        src={image}
        alt=""
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:slate-800">
        {titre}
      </h1>

      <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-800 p-4 text-center">
        {texte}
      </p>
    </NavLink>
  );
}
