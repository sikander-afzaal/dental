import Image from "next/image";
import React from "react";

const Specialist = () => {
  return (
    <div className="flex justify-center items-center w-full mt-[50px] lg:mt-[100px] px-5">
      <div className="flex justify-center lg:flex-row flex-col-reverse w-full items-start gap-[35px] max-w-[1030px]">
        <div className="w-full max-w-[455px] h-[350px] sm:h-[500px] relative lg:self-auto self-center">
          <Image
            alt=""
            fill
            src={"/specialist.png"}
            style={{ objectFit: "cover" }}
          />
          <p className="absolute top-3 grid place-items-center rounded-md text-white left-3 bg-[#0643A2] w-[130px] h-[48px] text-[15px] font-semibold font-nunito">
            New
          </p>
        </div>
        <div className="flex justify-start items-start gap-4 flex-col">
          <div className="flex flex-col justify-center items-start gap-1 text-left">
            <h3 className="text-cyan font-semibold font-nunito text-base sm:text-lg">
              Departments
            </h3>
            <h2 className="text-main-text  leading-[1.1] font-extrabold text-[30px] sm:text-[32px] font-nunito">
              Dentists are Specialists
            </h2>
          </div>
          <p className="text-[15px] my-5 font-normal leading-5 text-[#676767] font-nunito">
            We have gathered only qualified specialists with extensive rience
            you for free you with any problem!
          </p>
          <ul className="list-inside list-disc flex justify-start items-start flex-col gap-7">
            <li className="marker:hidden flex items-start gap-3 justify-start">
              <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-cyan"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-main-text leading-[1]  text-lg font-bold font-nunito">
                  Large network of clinics
                </h3>
                <p className="text-[#656565] text-sm font-medium font-nunito">
                  We have gathered only qualified with extensive rience you for
                  free you with any problem!
                </p>
              </div>
            </li>
            <li className="marker:hidden flex items-start gap-3 justify-start">
              <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-cyan"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-main-text leading-[1]  text-lg font-bold font-nunito">
                  Professional dentists
                </h3>
                <p className="text-[#656565] text-sm font-medium font-nunito">
                  We have gathered only qualified with extensive rience you for
                  free you with any problem!
                </p>
              </div>
            </li>
            <li className="marker:hidden flex items-start gap-3 justify-start">
              <div className="w-[10px] h-[10px] rounded-full mt-[3px] bg-cyan"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-main-text leading-[1]  text-lg font-bold font-nunito">
                  Durable materials
                </h3>
                <p className="text-[#656565] text-sm font-medium font-nunito">
                  We have gathered only qualified with extensive rience you for
                  free you with any problem!
                </p>
              </div>
            </li>
          </ul>
          <button className="bg-cyan mt-[20px] font-nunito cursor-pointer uppercase text-white font-bold w-[304px] h-[51px] rounded text-[18px]">
            Mission & Vision
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
