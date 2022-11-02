import Image from "next/image";

const Faq = () => {
  return (
    <div className="w-full justify-center px-5 flex-col -translate-y-[90px] items-center flex">
      <div className="w-full justify-center items-center flex relative isolate">
        <div className="h-[95px] lg:bg-cyan w-full absolute top-1/2 left-0 -translate-y-1/2 -z-10"></div>
        <div className="w-full flex-col lg:flex-row gap-6 justify-center items-center  flex max-w-[1183px]">
          <div className="shadow-lg flex sm:flex-row flex-col-reverse justify-between items-center w-full bg-white rounded-[15px] overflow-hidden">
            <div className="sm:py-0 py-5  flex justify-center items-center gap-4 px-2">
              <Image src={"/calendar.png"} width={83} height={88} />
              <h2 className="font-nunito text-lg xl:text-[24px] text-[#273257] font-bold">
                Request <br /> Appointment
              </h2>
            </div>
            <div className="w-[110%] sm:max-w-[259px] sm:m-0 -ml-1 h-[200px] sm:h-[187px] relative">
              <Image
                src={"/landing-hero-card1.png"}
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          </div>
          <div className="shadow-lg flex sm:flex-row flex-col-reverse justify-between items-center w-full bg-white rounded-[15px] overflow-hidden">
            <div className="sm:py-0 py-5  flex justify-center items-center gap-4 px-2">
              <Image src={"/stethoscope.png"} width={83} height={88} />
              <h2 className="font-nunito text-lg xl:text-[24px] text-[#273257] font-bold">
                Request <br /> Call Back!
              </h2>
            </div>
            <div className="w-[110%] sm:max-w-[259px] sm:m-0 -ml-1 h-[200px] sm:h-[187px] relative">
              <Image
                src={"/landing-hero-card3.png"}
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1183px] flex justify-center gap-3 mt-12 items-start flex-col">
        <h2 className="font-avenir text-[22px] font-medium text-main-text py-4">
          <span className="md:border-y-[1px] border-solid md:border-cyan py-2">
            What are
          </span>{" "}
          Dental Veneers and Lumineers?
        </h2>
        <p className="font-nunito font-medium text-base text-[#818181] leading-[27px]">
          The treatment is completed on average in 2-3 sessions within 1 week.
          Teeth are measured first and then a patient-specific smile design is
          made. The design of the smile, called a mock-up, is shown in advance
          to the patient, so that he can get an idea of what it will look like.
          In this way, the patient’s expectations and ideas are considered and
          the smile design treatment is initiated. The teeth are abraded about 2
          mm under local anesthesia and the measurements are taken and sent to
          the laboratory. During the same session the patient receives the
          temporary teeth. The patient can thus resume his social and working
          life. The laboratory’s E-max porcelain teeth are applied to the
          patient in 2 or 3 sessions and the treatment is completed within 1
          week.
        </p>
        <h2 className="font-avenir text-[22px] font-medium text-main-text py-4">
          <span className="md:border-y-[1px] border-solid md:border-cyan py-2">
            When are
          </span>{" "}
          the Bonded Dental Veneers and Lumineers recommended?
        </h2>
        <p className="font-nunito font-medium text-base text-[#818181] leading-[27px]">
          The treatment is completed on average in 2-3 sessions within 1 week.
          Teeth are measured first and then a patient-specific smile design is
          made. The design of the smile, called a mock-up, is shown in advance
          to the patient, so that he can get an idea of what it will look like.
          In this way, the patient’s expectations and ideas are considered and
          the smile design treatment is initiated. The teeth are abraded about 2
          mm under local anesthesia and the measurements are taken and sent to
          the laboratory. During the same session the patient receives the
          temporary teeth. The patient can thus resume his social and working
          life. The laboratory’s E-max porcelain teeth are applied to the
          patient in 2 or 3 sessions and the treatment is completed within 1
          week.
        </p>
        <h2 className="font-avenir text-[22px] font-medium text-main-text py-4">
          <span className="md:border-y-[1px] border-solid md:border-cyan py-2">
            Can I Have
          </span>{" "}
          Teeth Whitening After Putting Porcelain Veneers?
        </h2>
        <p className="font-nunito font-medium text-base text-[#818181] leading-[27px]">
          The treatment is completed on average in 2-3 sessions within 1 week.
          Teeth are measured first and then a patient-specific smile design is
          made. The design of the smile, called a mock-up, is shown in advance
          to the patient, so that he can get an idea of what it will look like.
          In this way, the patient’s expectations and ideas are considered and
          the smile design treatment is initiated. The teeth are abraded about 2
          mm under local anesthesia and the measurements are taken and sent to
          the laboratory. During the same session the patient receives the
          temporary teeth. The patient can thus resume his social and working
          life. The laboratory’s E-max porcelain teeth are applied to the
          patient in 2 or 3 sessions and the treatment is completed within 1
          week.
        </p>
      </div>
    </div>
  );
};

export default Faq;
