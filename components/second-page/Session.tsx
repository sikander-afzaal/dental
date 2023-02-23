import Image from "next/image";
import { forwardRef } from "react";
import { rgbDataURL } from "../../constants";

interface Props {
  title: any;
  description: any;
  images: Array<string>;
  cta: string;
}

const Session = forwardRef<HTMLDivElement, Props>(
  ({ title, description, images, cta }, ref) => {
    return (
      <div
        className="w-full pb-[180px] pt-10 lg:pt-[100px] px-5 lg:pl-5 flex justify-end items-center bg-[#F3FAFA]"
        ref={ref}
      >
        <div className="w-full lg:flex-row flex-col gap-8 lg:gap-[70px] flex justify-center items-center max-w-[1554px]">
          <div className="flex justify-start items-start flex-col gap-4">
            <div className="flex flex-col justify-center items-start gap-1 text-left">
              <h3 className="text-cyan font-bold font-nunito text-base sm:text-xl">
                {cta}
              </h3>
              <div
                className="text-main-text  leading-[1.1] font-black text-[30px] sm:text-[32px] font-avenir"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div
              className="font-nunito font-medium text-base leading-[27px] text-[#818181] lg:max-w-[680px]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="flex lg:w-auto w-full justify-start items-center gap-4 overflow-x-auto">
            {images.map((img, index) => (
              <div
                className="h-[504px] w-[450px] relative overflow-hidden"
                key={index}
              >
                <Image
                  src={img}
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  placeholder="blur"
                  blurDataURL={rgbDataURL()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default Session;
