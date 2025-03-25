// use client

import {motion} from "framer-motion";

import { useState, useEffect } from "react";

const blogs = [
  {
    id: 1,
    title: "Representation",
    image: "images/img1.jpg",
  },
  {
    id: 2,
    title: "Representation",
    image: "images/voiture.jpg",
  },
  {
    id: 3,
    title: "Representation",
    image: "images/img6.jpg",
  },
  {
    id: 4,
    title: "vente",
    image: "images/soja.jpg",
  },
  {
    id: 5,
    title: "vente",
    image: "images/mais.jpg",
  },
];

export default function SolidBento() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="max-sm:mb-[1050px] md:mb-10 max-lg:hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, delay: 0.2 },
        y: 0,
      }}
    >
      <h1 className="text-4xl font-bold text-center mt-24 mb-14 capitalize sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
        Gallery
      </h1>
      <div className="grid max-h-screen h-auto p-4 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4">
        {blogs.map((blog, index) => (
          <a
            key={blog.id}
            // href={blog.a}
            className={`relative group flex overflow-hidden rounded-2xl  transition-all duration-300 hover:scale-[1.02] ${
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : index === 1
                ? "md:col-span-1 md:row-span-1"
                : "md:col-span-1 md:row-span-1 lg:row-span-2"
            }`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="transition-all duration-300 group-hover:scale-110  object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
