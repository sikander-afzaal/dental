import Image from "next/image";

const Steps = () => {
  return (
    <div className="flex py-[50px] min-h-[800px] justify-center items-center w-full flex-col relative">
      <div className="w-full h-full absolute left-0 top-0 z-10">
        <Image fill src={"/steps.png"} style={{ objectFit: "cover" }} alt=""/>
      </div>
      <div className="w-full h-full absolute left-0 top-0 z-20 bg-cyan opacity-90"></div>
      <div className="relative px-5 z-30 w-full max-w-[1440px] flex justify-center items-center flex-col">
        <div className="text-center">
          <h2 className="font-bold text-[36px] text-white font-nunito mb-2">
            How We Work
          </h2>
          <p className="text-[15px] text-white font-normal font-nunito max-w-[540px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex justify-center sm:justify-between flex-wrap items-center w-full flex-row gap-5 mt-[40px] sm:mt-[80px]">
          <div className="flex justify-start h-[300px] items-center w-full max-w-[310px] flex-col text-center">
            <Image src={"/step1.png"} width={224} height={224} alt=""/>
            <h2 className="text-[30px] text-white font-bold font-nunito">
              Appointment
            </h2>
            <p className="text-[18px] text-white font-normal font-nunito ">
              We set an appointment near you city!
            </p>
          </div>
          <div className="flex justify-start h-[300px] items-center w-full max-w-[310px] flex-col text-center">
            <Image src={"/step1.png"} width={224} height={224} alt=""/>
            <h2 className="text-[30px] text-white font-bold font-nunito">
              Expert Doctor
            </h2>
            <p className="text-[18px] text-white font-normal font-nunito ">
              Our Expert doctors will examine your problem and suggest the best
              option.
            </p>
          </div>
          <div className="flex justify-start h-[300px] items-center w-full max-w-[310px] flex-col text-center">
            <Image src={"/step1.png"} width={224} height={224} alt=""/>
            <h2 className="text-[30px] text-white font-bold font-nunito">
              Intervent
            </h2>
            <p className="text-[18px] text-white font-normal font-nunito ">
              You do the intervene in our clinic in Tirana, Albania.
            </p>
          </div>
          <div className="flex justify-start h-[300px] items-center w-full max-w-[310px] flex-col text-center">
            <Image src={"/step1.png"} width={224} height={224} alt="" />
            <h2 className="text-[30px] text-white font-bold font-nunito">
              Enjoy Life
            </h2>
            <p className="text-[18px] text-white font-normal font-nunito ">
              Your new smile is shining already.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
