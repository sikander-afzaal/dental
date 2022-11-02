import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-7 lg:gap-0 lg:grid-cols-2 ">
      <div className="w-full md:h-[450px] h-[300px] lg:h-[582px] row-start-2 lg:row-span-1 row-end-3 relative">
        <Image src={"/work.png"} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex justify-center items-start flex-col px-5 pt-6 lg:pt-0 lg:px-16">
        <div className="flex flex-col justify-center items-start gap-1 text-left">
          <h3 className="text-cyan font-bold font-nunito text-base sm:text-lg">
            Veneers
          </h3>
          <h2 className="text-main-text  leading-[1.1] font-extrabold text-[30px] sm:text-[32px] font-nunito">
            What are the <br /> Advantages of Emax veneers?
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

        <div className="flex justify-start  flex-col sm:flex-row w-full items-center gap-6">
          <button className="bg-cyan cursor-pointer uppercase text-white font-semibold sm:w-auto w-full px-5 min-w-[157px] h-[51px] rounded text-sm">
            Learn More!
          </button>
          <button className="bg-cyan cursor-pointer uppercase text-white font-semibold px-5 sm:w-auto w-full min-w-[157px] h-[51px] rounded text-sm">
            Call +355 692020202
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
