import Image from "next/image";

const Faq = ({ questions }) => {
  return (
    <div className="w-full justify-center px-5 flex-col -translate-y-[90px] items-center flex">
      <div className="w-full justify-center items-center flex relative isolate">
        <div className="h-[95px] lg:bg-cyan w-full absolute top-1/2 left-0 -translate-y-1/2 -z-10"></div>
        <div className="w-full flex-col lg:flex-row gap-6 justify-center items-center  flex max-w-[1183px]">
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
          <div className="shadow-lg flex sm:flex-row flex-col-reverse justify-between items-center w-full bg-white rounded-[15px] overflow-hidden">
            <div className="sm:py-0 py-5  flex justify-center items-center gap-4 px-2">
              <Image alt="" src={"/stethoscope.png"} width={83} height={88} />
              <h2 className="font-nunito text-lg xl:text-[24px] text-[#273257] font-bold">
                Request <br /> Call Back!
              </h2>
            </div>
            <div className="w-[110%] sm:max-w-[259px] sm:m-0 -ml-1 h-[200px] sm:h-[187px] relative">
              <Image
                alt=""
                src={"/landing-hero-card3.png"}
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
      <div className="w-full max-w-[1183px] flex justify-center gap-4 mt-12 items-start flex-col">
        {questions.map((question, index) => (
          <div key={index}>
            <h2 className="font-avenir text-[22px] font-medium text-main-text py-4">
              <span className="py-2 border-t md:border-b   border-solid border-cyan">
                {question.title.split(" ")[0]}
              </span>{" "}
              {question.title
                .split(" ")
                .map((e, i) => (i !== 0 ? `${e} ` : ""))}
            </h2>

            <div
              className="font-nunito font-medium text-base text-[#818181] leading-[27px]"
              dangerouslySetInnerHTML={{ __html: question.answer }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
