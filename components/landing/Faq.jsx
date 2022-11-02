import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FaqQuestion = ({ question, answer }) => {
  const [activeFaq, setActiveFaq] = useState(false);
  return (
    <div
      className={`shadow-2xl  ease-in-out duration-750 rounded transition-all overflow-hidden flex justify-start items-center flex-col w-full ${
        activeFaq ? "bg-cyan" : "bg-white"
      }`}
    >
      <div
        onClick={() => setActiveFaq((prev) => !prev)}
        className="flex justify-between cursor-pointer  p-5 items-center  w-full"
      >
        <p
          className={`text-base sm:text-lg transition-all  font-medium ${
            activeFaq ? "text-white" : "text-main-text"
          }`}
        >
          {question}
        </p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${
            activeFaq ? "text-white" : "text-main-text"
          } transition-all w-5`}
        />
      </div>
      <div
        className={`w-full bg-cyan transition-all ease-in-out duration-750 px-5 ${
          activeFaq ? "max-h-[2000px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[15px] text-white font-medium  leading-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="px-5 w-full justify-center items-center flex ">
      <div className="justify-start items-start flex-col flex w-full gap-[20px] mt-[140px] max-w-[550px]">
        <div className="flex flex-col justify-center items-start gap-1 text-left">
          <h3 className="text-cyan font-bold font-nunito text-base sm:text-lg">
            faq
          </h3>
          <h2 className="text-main-text  leading-[1.1] font-extrabold text-[30px] sm:text-[38px] font-nunito">
            Frequently Asked <br /> Questions
          </h2>
        </div>
        <FaqQuestion
          question={" 01. Turismo Dentale in Albania?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem, voluptas inventore id magnam quo vitae fugit impedit eos iure ea nostrum nemo explicabo ut. Nobis excepturi impedit consectetur alias molestias architecto eaque voluptatibus amet explicabo."
          }
        />
        <FaqQuestion
          question={" 01. Turismo Dentale in Albania?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem, voluptas inventore id magnam quo vitae fugit impedit eos iure ea nostrum nemo explicabo ut. Nobis excepturi impedit consectetur alias molestias architecto eaque voluptatibus amet explicabo."
          }
        />
        <FaqQuestion
          question={" 01. Turismo Dentale in Albania?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem, voluptas inventore id magnam quo vitae fugit impedit eos iure ea nostrum nemo explicabo ut. Nobis excepturi impedit consectetur alias molestias architecto eaque voluptatibus amet explicabo."
          }
        />
        <FaqQuestion
          question={" 01. Turismo Dentale in Albania?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem, voluptas inventore id magnam quo vitae fugit impedit eos iure ea nostrum nemo explicabo ut. Nobis excepturi impedit consectetur alias molestias architecto eaque voluptatibus amet explicabo."
          }
        />
      </div>
    </div>
  );
};

export default Faq;
