import React from "react";
import { images } from "@/utils/constants";
import left from "../public/left.svg";
import right from "../public/right.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  clickNext: any;
  clickPrev: any;
  activeImageIndex: any;
};

const Description = ({ clickNext, clickPrev, activeImageIndex }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        Coffee Cafe
      </div>
      {images.map((elem, index) => (
        <div
          className={
            index === activeImageIndex
              ? `px-8 block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
              : "hidden"
          }
          key={index}
        >
          <motion.div
            initial={{
              opacity: index === activeImageIndex ? 0 : 0.5,
              scale: index === activeImageIndex ? 0.5 : 0.3,
            }}
            animate={{
              opacity: index === activeImageIndex ? 1 : 0.5,
              scale: index === activeImageIndex ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 }
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed fond-medium text-base tracking-wide h-40 italic text-gray-600">
              {elem.desc}
            </div>
          </motion.div>
          <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
            order now
          </button>
          <div className="absolute bottom-1 w-full flex justify-center items-center">
            <div
              onClick={clickPrev}
              className="absolute bottom-2 right-10 cursor-pointer"
            >
              <Image src={left} alt="" width={20} height={20} />
            </div>
            <div
              onClick={clickNext}
              className="absolute bottom-2 right-2 cursor-pointer"
            >
              <Image src={right} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
