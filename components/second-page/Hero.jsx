import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { url } from "../../queries";
import { languageAtom } from "../../state";
import work from "../../public/work.png";
import { rgbDataURL } from "../../constants";

const Hero = ({
  name,
  title,
  description,
  phone,
  mainImage,
  learnMoreRef,
  cta,
}) => {
  const language = useAtomValue(languageAtom);
  const isItalian = language === "it";

  return (
    <div className="w-full grid grid-cols-1 gap-7 lg:gap-0 lg:grid-cols-2 ">
      <div className="w-full md:h-[450px] h-[300px] lg:h-[582px] row-start-2 lg:row-span-1 row-end-3 relative">
        <Image
          src={mainImage}
          fill
          style={{ objectFit: "cover" }}
          alt=""
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
          placeholder="blur"
          blurDataURL={rgbDataURL()}
        />
      </div>
      <div className="flex justify-center items-start flex-col px-5 pt-6 lg:pt-0 lg:px-16">
        <div className="flex flex-col justify-center items-start gap-1 text-left">
          <h3 className="text-cyan font-bold font-nunito text-base sm:text-lg">
            {name}
          </h3>
          <div
            className="text-main-text  leading-[1.1] font-extrabold text-[30px] sm:text-[32px] font-nunito"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <div
          className="text-[15px] font-medium font-nunito text-[#818181] leading-[27px] max-w-[680px] my-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="flex justify-start  flex-col sm:flex-row w-full items-center gap-6">
          <button
            className="bg-cyan cursor-pointer uppercase text-white font-semibold sm:w-auto w-full px-5 min-w-[157px] h-[51px] rounded text-sm"
            onClick={() => {
              learnMoreRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            {cta}!
          </button>
          <Link href={`tel:${phone}`}>
            <button className="bg-cyan cursor-pointer uppercase text-white font-semibold px-5 sm:w-auto w-full min-w-[157px] h-[51px] rounded text-sm">
              {isItalian ? "Chiamata" : "Call"} {phone}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
