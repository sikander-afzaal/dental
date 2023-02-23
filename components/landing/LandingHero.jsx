import Image from "next/image";

const LandingHero = () => {
  return (
    <div className="w-full relative ">
      <div className="w-full h-[1220px] sm:h-[1074px]">
        <Image
          alt=""
          src={"/hero.png"}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-full bg-hero-fade z-10">
        <Image alt="" src={"/gradient overlay.png"} fill />
      </div>
      <div className="absolute left-1/2 top-[5%] sm:top-[28%] lg:top-1/2 -translate-x-1/2 z-20 sm:-translate-y-1/2 flex justify-between items-start flex-col w-full px-5 max-w-[1183px]">
        <div className="flex justify-start items-start flex-col gap-8 w-full">
          {" "}
          <h1 className="text-[40px] sm:text-[60px] lg:text-[96px] font-black font-avenir leading-[1.1] text-white">
            Leader in <br /> Implantology{" "}
          </h1>
          <p className="text-white font-avenir font-medium text-[20px] sm:text-[22px] lg:text-[28px]">
            Smile with confidence, <br /> with implants by DentalCareOne™
          </p>
          <div className="flex-col sm:flex-row flex justify-start items-center gap-5 w-full">
            <button className="bg-cyan border-[3px] font-avenir sm:w-auto w-full text-[22px] text-white px-5 py-2 cursor-pointer rounded border-solid border-white">
              Read More
            </button>
            <button className="bg-cyan border-[3px] font-avenir text-[22px] text-white sm:w-auto w-full  px-5 py-2 cursor-pointer rounded border-solid border-white">
              Contact Us Today!
            </button>
          </div>
        </div>
      </div>
      <div className="left-1/2 lg:translate-y-1/2 -translate-x-1/2 z-20 flex justify-center absolute bottom-[2%] sm:bottom-[10%] lg:bottom-0 items-center gap-4 w-full px-5 lg:flex-row flex-col max-w-[1183px]">
        <div className="shadow-lg flex sm:flex-row flex-col-reverse justify-between items-center w-full bg-white rounded-[15px] overflow-hidden">
          <div className="sm:py-0 py-5  flex justify-center items-center gap-4 px-2">
            <Image alt="" src={"/calendar.png"} width={83} height={88} />
            <h2 className="font-nunito text-lg xl:text-[24px] text-[#273257] font-bold">
              Request <br /> Appointment
            </h2>
          </div>
          <div className="w-[110%] sm:max-w-[259px] sm:m-0 -ml-1 h-[200px] sm:h-[187px] relative">
            <Image
              alt=""
              src={"/landing-hero-card1.png"}
              style={{ objectFit: "cover" }}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        </div>
        <div className="flex shadow-lg sm:flex-row flex-col-reverse justify-between items-center w-full bg-white rounded-[15px] overflow-hidden">
          <div className="flex sm:py-0 py-5 justify-center items-center gap-4 px-2">
            <Image alt="" src={"/stethoscope.png"} width={83} height={88} />
            <h2 className="font-nunito text-[#273257] text-lg xl:text-[24px] font-bold">
              Find the best <br /> treatment!
            </h2>
          </div>
          <div className="w-[110%] sm:max-w-[259px] sm:m-0 -ml-1 h-[200px] sm:h-[187px] relative">
            <Image
              alt=""
              src={"/landing-hero-card2.png"}
              style={{ objectFit: "cover" }}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
