import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactFlagsSelect from "react-flags-select";

const booking = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("AU");

  const variants = {
    initial: {
      opacity: 0,
      x: 500,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },

    exit: {
      opacity: 0,
      x: 500,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex w-full overflow-x-hidden py-8 bg-white min-h-[calc(100vh_-_276px)] lg:min-h-[calc(100vh_-_142px)] px-5 justify-center items-center">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <Step1 variants={variants} key={step} setStep={setStep} />
        )}
        {step === 2 && (
          <Step2 variants={variants} key={step} setStep={setStep} />
        )}
        {step === 3 && (
          <Step3
            selected={selected}
            setSelected={setSelected}
            variants={variants}
            key={step}
            setStep={setStep}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default booking;

const Step1 = ({ setStep, variants }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="flex justify-center w-full items-center gap-10"
    >
      <div className="flex w-full max-w-[370px] justify-start items-center flex-col gap-8">
        <div
          onClick={() => setStep(2)}
          className="flex justify-between hover:bg-[#DDDDDD] transition-all duration-300 cursor-pointer items-center bg-white shadow-lg rounded-lg w-full h-[110px] px-[20px] py-[5px]"
        >
          <div className="flex justify-start text-[#335360] items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex justify-start items-start flex-col gap-1">
              <h4 className="text-inherit text-xl font-medium">
                Free Phone Consult
              </h4>{" "}
              <p className="text-gray-text text-sm">
                Book a 30 minutes phone consult
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#335360"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          onClick={() => setStep(2)}
          className="flex justify-between hover:bg-[#DDDDDD] transition-all duration-300 cursor-pointer items-center bg-white shadow-lg rounded-lg w-full h-[110px] px-[20px] py-[5px]"
        >
          <div className="flex justify-start text-[#335360] items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>

            <div className="flex justify-start items-start flex-col gap-1">
              <h4 className="text-inherit text-xl font-medium">
                Free Video Consult
              </h4>{" "}
              <p className="text-gray-text text-sm">
                Book a 30 minutes video consult
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#335360"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          onClick={() => setStep(2)}
          className="flex justify-between hover:bg-[#DDDDDD] transition-all duration-300 cursor-pointer items-center bg-white shadow-lg rounded-lg w-full h-[110px] px-[20px] py-[5px]"
        >
          <div className="flex justify-start text-[#335360] items-center gap-4">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-inherit w-[24px]"
            />
            <div className="flex justify-start items-start flex-col gap-1">
              <h4 className="text-inherit text-xl font-medium">Live support</h4>{" "}
              <p className="text-gray-text text-sm">
                Live support via whatsapp
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#335360"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <Image
        src={"/booking.png"}
        className="lg:block hidden"
        width={446}
        height={446}
        alt="...."
      />
    </motion.div>
  );
};
const Step2 = ({ setStep, variants }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="flex w-full max-w-[1000px] justify-center items-center gap-10 relative"
    >
      <div
        onClick={() => setStep(1)}
        className="flex justify-start items-center gap-3 absolute cursor-pointer select-none -top-[20%] left-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#335360"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <p className="text-[#335360] text-base font-medium">Back</p>
      </div>
      <div className="flex w-full max-w-[370px] justify-start items-center flex-col gap-8">
        <div
          onClick={() => setStep(3)}
          className="flex justify-between hover:bg-[#DDDDDD] transition-all duration-300 cursor-pointer items-center bg-white shadow-lg rounded-lg w-full h-[110px] px-[20px] py-[5px]"
        >
          <div className="flex justify-start w-full text-[#335360] items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="flex justify-start items-start flex-col gap-1">
              <h4 className="text-inherit text-lg sm:text-xl font-medium">
                I want a consultation as soon as possible
              </h4>{" "}
            </div>
          </div>
        </div>
        <div
          onClick={() => setStep(3)}
          className="flex justify-between hover:bg-[#DDDDDD] transition-all duration-300 cursor-pointer items-center bg-white shadow-lg rounded-lg w-full h-[110px] px-[20px] py-[5px]"
        >
          <div className="flex justify-start text-[#335360] items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>

            <div className="flex justify-start items-start flex-col gap-1">
              <h4 className="text-inherit text-lg sm:text-xl font-medium">
                I want to set my consultation appointment myself
              </h4>{" "}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/booking.png"}
        className="lg:block hidden"
        width={446}
        height={446}
        alt="...."
      />
    </motion.div>
  );
};
const Step3 = ({ setStep, variants, selected, setSelected }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="flex w-full lg:flex-row flex-col max-w-[1000px] justify-center items-start lg:items-center gap-7  relative"
    >
      <div
        onClick={() => setStep(1)}
        className="flex justify-start items-center gap-3 lg:absolute cursor-pointer select-none -top-[10%] left-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#335360"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <p className="text-[#335360] text-base font-medium">Back</p>
      </div>
      <div className="flex w-full  justify-start items-center flex-col ">
        <div className="flex justify-start items-center gap-6 w-full py-6 border-b border-solid border-[rgba(0,0,0,0.12)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#335360"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p className="text-[#335360] text-sm">30 Minutes</p>
        </div>
        <div className="flex justify-start items-center gap-6 w-full py-6 border-b border-solid border-[rgba(0,0,0,0.12)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#335360"
            className="w-6 h-6"
          >
            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
          </svg>

          <p className="text-[#335360] text-sm">
            Online treatment planning and quote
          </p>
        </div>
        <div className="flex justify-start items-center gap-6 w-full py-6 border-b border-solid border-[rgba(0,0,0,0.12)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#335360"
            className="w-6 h-6"
          >
            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>

          <p className="text-[#335360] text-sm">
            I want a consultation as soon as possible.
          </p>
        </div>
      </div>
      <form className="flex justify-start items-start flex-col gap-5 w-full">
        <h3 className="text-[#335360] text-base font-medium">Enter Details</h3>
        <div className="flex sm:flex-row flex-col justify-start items-center gap-5 w-full">
          <input
            type="text"
            placeholder="Your firstname*"
            className="text-[rgba(51,83,96,0.6)] text-base border border-solid border-[rgba(0,0,0,0.24)] bg-white w-full h-[52px] pl-2"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Your lastname*"
            className="text-[rgba(51,83,96,0.6)] text-base border border-solid border-[rgba(0,0,0,0.24)] bg-white w-full h-[52px] pl-2"
            name="lastName"
          />
        </div>
        <input
          type="email"
          placeholder="Your email*"
          className="text-[rgba(51,83,96,0.6)] text-base border border-solid border-[rgba(0,0,0,0.24)] bg-white w-full h-[52px] pl-2"
          name="email"
        />
        <div className="flex justify-start bg-white items-center gap-4 border border-solid border-[rgba(0,0,0,0.24)] w-full">
          <ReactFlagsSelect
            selectButtonClassName="max-w-[60px] h-[52px] border-none"
            showSelectedLabel={false}
            searchable
            searchPlaceholder="Search countries"
            selected={selected}
            onSelect={(code) => setSelected(code)}
            fullWidth={false}
          />
          <input
            type="phone"
            placeholder="Your phone*"
            className="text-[rgba(51,83,96,0.6)] pl-2 text-base  bg-white w-full h-[52px]"
            name="phone"
          />
        </div>
        <input
          type="text"
          placeholder="Discount Code"
          className="text-[rgba(51,83,96,0.6)] text-base border border-solid border-[rgba(0,0,0,0.24)] bg-white w-full h-[52px] pl-2"
          name="discount"
        />
        <textarea
          placeholder="Your message"
          className="text-[rgba(51,83,96,0.6)] text-base border border-solid border-[rgba(0,0,0,0.24)] bg-white w-full h-[135px] resize-none pt-2 pl-2"
          name="message"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          type="submit"
          className="bg-cyan mx-5 uppercase cursor-pointer text-white font-semibold w-[157px] h-[51px] rounded-full text-sm"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};
