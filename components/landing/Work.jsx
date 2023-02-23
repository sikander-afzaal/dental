import Image from "next/image";

const Work = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-7 lg:gap-0 lg:grid-cols-2 bg-[#F3FAFA] mt-[80px]">
      <div className="w-full md:h-[450px] h-[300px] lg:h-[582px] row-start-2 lg:row-span-1 row-end-3 relative">
        <Image alt="" src={"/work.png"} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex justify-center items-start flex-col px-5 pt-6 lg:pt-0 lg:px-16">
        <div className="flex flex-col justify-center items-start gap-1 text-left">
          <h3 className="text-cyan font-bold font-nunito text-base sm:text-lg">
            INVISALIGN
          </h3>
          <h2 className="text-main-text  leading-[1.1] font-extrabold text-[30px] sm:text-[32px] font-nunito">
            How does <br /> Invisalign work?
          </h2>
        </div>
        <p className="text-[15px] font-medium font-nunito text-[#818181] leading-[27px] max-w-[680px] my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          tempor i ncididuntut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit, sed do tempor incididuntut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do tempor i ncididuntut labore et dolore magna
          aliqua.
        </p>
        <div className="flex justify-start items-start gap-3 my-7">
          <Image alt="" src={"/quotes.png"} width={45} height={42} />
          <p className="text-lg font-medium font-nunito max-w-[372px]">
            I am alone, and feel the charm of existence in which was real
            estate, medical.
          </p>
        </div>
        <div className="flex justify-start flex-col sm:flex-row w-full items-center gap-6">
          <button className="bg-cyan cursor-pointer uppercase text-white font-semibold w-[157px] h-[51px] rounded text-sm">
            More About
          </button>
          <div className="items-center flex justify-center gap-3">
            <Image alt="" src={"/ceo.png"} width={59} height={59} />
            <div>
              <h4 className="text-main-text text-lg font-bold font-nunito">
                Dr Zason Jak
              </h4>
              <h5 className="text-cyan text-sm font-bold font-nunito">
                Ceo-Founder
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
