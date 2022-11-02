import Image from "next/image";

const Session = () => {
  return (
    <div className="w-full pb-[180px] pt-10 lg:pt-[100px] px-5 lg:pl-5 flex justify-end items-center bg-[#F3FAFA]">
      <div className="w-full lg:flex-row flex-col gap-8 lg:gap-[70px] flex justify-center items-center max-w-[1554px]">
        <div className="flex justify-start items-start flex-col gap-4">
          <div className="flex flex-col justify-center items-start gap-1 text-left">
            <h3 className="text-cyan font-bold font-nunito text-base sm:text-xl">
              Learn More
            </h3>
            <h2 className="text-main-text  leading-[1.1] font-black text-[30px] sm:text-[32px] font-avenir">
              How many sessions are required for{" "}
              <br className="2xl:block hidden" /> Empress E-max porcelain
              veneers?
            </h2>
          </div>
          <p className="font-nunito font-medium text-base leading-[27px] text-[#818181] lg:max-w-[680px]">
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
        <div className="flex lg:w-auto w-full justify-start items-center gap-4 overflow-x-auto">
          <Image
            src={"/choose.png"}
            height={504}
            width={450}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={"/session.png"}
            height={504}
            width={450}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Session;
