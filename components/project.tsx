"use client"

import { projectsData } from "@/lib/data";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Dropdown from "./dropdown";

import { splitTags } from "@/lib/utils";

type ProjectProps = typeof projectsData[number];

export default function Project({ 
  title,
  description,
  imageUrl,
  tags
}: ProjectProps) { 
   const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isSmallScreen, setIsSmallScreen] = useState(true);
  let visibleTags:string[] = Array.from(tags);
  let dropdownTags:string[] = [];

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 640); // default breakpoint for sm: in Tailwind
    }

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isSmallScreen) {
    const result = splitTags(Array.from(tags), 40);
    visibleTags = result.visibleTags;
    dropdownTags = result.dropdownTags;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="flex group-even:flex-row-reverse bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg  sm:pr-0 sm:group-even:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ">
          <h3 className="line-clamp-2 text-2xl font-semibold">{title}</h3>
          <p className="line-clamp-5 mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {visibleTags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
            {
            !!dropdownTags.length && <Dropdown elements={dropdownTags} className='hidden sm:block' />
            }
          </ul>
        </div>
        <div className=" hidden sm:block relative overflow-hidden h-full w-full">
            <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="object-cover absolute top-[2.5rem] -right-10 group-even:-left-10 sm:block w-[28.25rem] h-full rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2"
        />
</div>
      
      </section>
    </motion.div>
  
  )
}
