import Image from "next/image";

const Pride = () => {
  //ss
  return (
    <div className="w-full flex justify-center items-center  lg:mb-[100px] mt-[40px] mb-[40px] lg:mt-[80px]">
      <div className="w-full flex-col lg:flex-row  flex justify-between items-start gap-2 max-w-[1183px] lg:py-0 py-[20px] px-5">
        <div className="flex w-full justify-start items-start flex-col">
          <div className="flex flex-col justify-center items-start gap-1 text-left">
            <h3 className="text-cyan font-bold font-nunito text-base sm:text-[22px]">
              Prosthodontics Treatment
            </h3>
            <h2 className="text-main-text  leading-[1.1] font-black text-[30px] sm:text-[40px] font-avenir">
              Dental Care One: <br /> Your smile, our pride
            </h2>
          </div>
          <div className="w-full h-[400px] relative mt-5 rounded-md overflow-hidden lg:mt-10">
            <Image src={"/pride.png"} fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="w-full flex  justify-start items-start flex-col">
          <p className="text-base font-nunito font-normal leading-[22px] text-[#686868] pt-7">
            Quis ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut et dolore magna aliqua ipsum ultrices
            gravida risus modo viverra mae cenas accumsan lacus vel.
          </p>
          <div className="w-full flex flex-col justify-start items-start lg:px-10 mt-5 lg:mt-[50px]">
            <h2 className="text-main-text font-bold font-nunito text-[33px]">
              How it work?
            </h2>
            <p className="text-[15px] max-w-[430px] font-nunito font-normal mt-2 mb-5 leading-[22px] text-[#828282]">
              We're here to care for you and your entire family, Regular visits
              to the doctor will depend on your age and general health!
            </p>
            <ul className="list-inside  list-disc flex justify-start items-start flex-col gap-2">
              <li className="marker:text-cyan font-nunito text-base font-semibold text-main-text">
                Fitness Guidance to Patient{" "}
              </li>
              <li className="marker:text-cyan font-nunito text-base font-semibold text-main-text">
                Building a healthy environment.
              </li>
              <li className="marker:text-cyan font-nunito text-base font-semibold text-main-text">
                Diabetes & blood pressor check up.
              </li>
              <li className="marker:text-cyan font-nunito text-base font-semibold text-main-text">
                Handle patient body in MRI.
              </li>
              <li className="marker:text-cyan font-nunito text-base font-semibold text-main-text">
                Excellence in Healthcare every.
              </li>
            </ul>
            <button className="bg-cyan mt-10 lg:mt-[82px] cursor-pointer uppercase text-white font-semibold w-[157px] h-[51px] rounded text-sm">
              MORE CHOOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pride;
