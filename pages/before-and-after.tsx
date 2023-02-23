import Image from "next/image";
import React from "react";
import { rgbDataURL } from "../constants";
import { url } from "../queries";
import { fetchBeforeAfter } from "../queries/beforeAfter";

const BeforeAndAfter = ({ images }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-y-4 gap-x-2 px-5 md:px-20 ">
      <div className="w-full flex flex-col justify-center items-center col-span-full gap-4 my-10">
        <h2 className="text-main-text  leading-[1.1] font-black text-[30px] sm:text-[42px] font-avenir text-center">
          Before and after visiting DentalCareOne
        </h2>

        <p className="text-lg font-nunito font-medium text-gray-text text-center">
          At our clinic, we are driven by results. Many people have trusted us
          and have seen tremendous changes in their oral health and life. Below
          are shown some examples from thousand of people who trusted us.
        </p>
      </div>
      {images.map((img, index) => (
        <div className="group" key={index}>
          <div
            className={`relative h-[500px] group peer border border-slate-300 bg-slate-300 rounded-lg overflow-hidden drop-shadow	 transition-all ease-in-out duration-1000 
            hover:drop-shadow-2xl
            group-hover:rounded-3xl
          `}
          >
            <Image
              //   style={{ objectFit: "cover" }}
              alt=""
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              fill
              src={`${url}${img.attributes.image.data.attributes.formats.medium.url}`}
              placeholder="blur"
              blurDataURL={rgbDataURL()}
              className="transition-all ease-in-out duration-1000 
            group-hover:scale-125
            "
            />
          </div>
          {/* <div
            className="flex items-center justify-center transition-all ease-in-out duration-1000 inset-0 bg-transparent z-[999] group
            group-hover:fixed
          group-hover:bg-black
            group-hover:bg-opacity-30 
            group-hover:backdrop-blur-sm
            
          "
          >
            <div className="relative overflow-hidden w-full md:w-1/2 lg:w-1/3 h-2/3 transition-all ease-in-out  delay-[5s] scale-100 rounded-lg">
              <Image
                //   style={{ objectFit: "cover" }}
                alt=""
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                fill
                src={`${url}${img.attributes.image.data.attributes.formats.medium.url}`}
                placeholder="blur"
                blurDataURL={rgbDataURL()}
              />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async ({ query, locale }) => {
  const images = await fetchBeforeAfter();

  return {
    props: {
      images: images.data,
    },
  };
};

export default BeforeAndAfter;
