import Image from "next/image";

const Quality = () => {
  return (
    <div className="flex justify-center mt-[80px] -mb-[40px] items-center w-full px-5">
      <div className="w-full flex justify-center flex-col items-center max-w-[1183px]">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h3 className="text-cyan font-bold font-nunito text-base sm:text-xl">
            Quality dental care at the right price.
          </h3>
          <h2 className="text-main-text max-w-[412px] leading-[1.1] font-black text-[30px] sm:text-[42px] font-avenir">
            Best Dental Clinic in Albania
          </h2>
        </div>
        <div className="relative xl:min-h-[760px] xl:max-w-[900px] mt-[40px] w-full py-10 xl:py-[160px] px-5 sm:px-10 xl:px-[220px] flex justify-center items-center bg-[#F3FAFA]">
          <div className="absolute xl:block hidden top-[5%] left-0 -translate-x-1/2">
            <Image alt="" width={280} height={414} src={"/quality1.png"} />
          </div>
          <div className="absolute xl:block hidden  bottom-[5%] right-0 translate-x-1/2">
            <Image alt="" width={280} height={350} src={"/quality2.png"} />
          </div>
          <p className="font-nunito max-w-[454px] leading-[27px] text-center font-medium text-base text-[#818181]">
            The treatment is completed on average in 2-3 sessions within 1 week.
            Teeth are measured first and then a patient-specific smile design is
            made. The design of the smile, called a mock-up, is shown in advance
            to the patient, so that he can get an idea of what it will look
            like. In this way, the patient’s expectations and ideas are
            considered and the smile design treatment is initiated. The teeth
            are abraded about 2 mm under local anesthesia and the measurements
            are taken and sent to the laboratory. During the same session the
            patient receives the temporary teeth. The patient can thus resume
            his social and working life. The laboratory’s E-max porcelain teeth
            are applied to the patient in 2 or 3 sessions and the treatment is
            completed within 1 week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
