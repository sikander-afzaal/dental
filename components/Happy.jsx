import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Happy = () => {
  return (
    <div className="flex flex-col px-5 w-full justify-center items-center bg-[#F3FAFA] mt-[200px]">
      <div className="flex justify-center items-center w-full max-w-[1183px] flex-col">
        <div className="flex bg-white shadow-lg flex-col sm:flex-row sm:gap-2 -translate-y-[30%] sm:-translate-y-1/2 w-full justify-between items-center gap-[30px] py-5 px-3 md:p-[60px]">
          {" "}
          <div className="flex justify-start flex-col items-center ">
            <h2 className="font-bold leading-[1.2] text-[30px] lg:text-[46px] text-cyan font-nunito">
              820+
            </h2>
            <p className="font-medium text-[20px] lg:text-[28px] leading-[1] text-main-text font-nunito">
              Happy Clients
            </p>
          </div>
          <div className="flex justify-start flex-col items-center ">
            <h2 className="font-bold leading-[1.2] text-[30px] lg:text-[46px] text-cyan font-nunito">
              4000+
            </h2>
            <p className="font-medium text-[20px] lg:text-[28px] leading-[1] text-main-text font-nunito">
              Implants
            </p>
          </div>
          <div className="flex justify-start flex-col items-center ">
            <h2 className="font-bold leading-[1.2] text-[30px] lg:text-[46px] text-cyan font-nunito">
              20+
            </h2>
            <p className="font-medium text-[20px] lg:text-[28px] leading-[1] text-main-text font-nunito">
              World doctors
            </p>
          </div>
          <div className="flex justify-start flex-col items-center ">
            <h2 className="font-bold leading-[1.2] text-[30px] lg:text-[46px] text-cyan font-nunito">
              427+
            </h2>
            <p className="font-medium text-[20px] lg:text-[28px] leading-[1] text-main-text font-nunito">
              Satisfaction
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 text-center sm:mt-0 -mt-[40px]">
          <h3 className="text-cyan font-bold font-nunito text-base sm:text-lg">
            Departments
          </h3>
          <h2 className="text-main-text max-w-[450px] leading-[1.1] font-bold text-[30px] sm:text-[40px] font-nunito">
            What A Happy Client!
          </h2>
          <p className="text-base font-normal max-w-[380px] mt-2 text-[#6E6E6E]">
            We have gathered only qualified specialists with extel you with any
            problem!
          </p>
        </div>
        <div className="w-full mt-10 lg:flex-nowrap flex-wrap justify-between flex items-center gap-8">
          <div className="flex bg-white sm:items-start w-full shadow-md rounded  justify-start items-center flex-col gap-3 p-5">
            <div className="flex justify-start items-center gap-3">
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
            </div>
            <p className="text-lg max-w-[250px] font-normal text-[#676767] leading-7">
              It here are many variations of ges ofm Ipsum availa majority
              teration in some form
            </p>
            <div className="flex justify-start items-center gap-3">
              <Image src={"/woman.png"} width={58} height={58} alt=""/>
              <div>
                {" "}
                <h5 className="text-lg font-bold font-nunito text-[#0643A2]">
                  Giulia Dalo
                </h5>
                <h6 className="text-cyan text-base font-medium">
                  🇮🇹From Italy
                </h6>
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:items-start w-full shadow-md rounded  justify-start items-center flex-col gap-3 p-5">
            <div className="flex justify-start items-center gap-3">
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
            </div>
            <p className="text-lg max-w-[250px] font-normal text-[#676767] leading-7">
              It here are many variations of ges ofm Ipsum availa majority
              teration in some form
            </p>
            <div className="flex justify-start items-center gap-3">
              <Image src={"/woman.png"} width={58} height={58} alt=""/>
              <div>
                {" "}
                <h5 className="text-lg font-bold font-nunito text-[#0643A2]">
                  Giulia Dalo
                </h5>
                <h6 className="text-cyan text-base font-medium">
                  🇮🇹From Italy
                </h6>
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:items-start w-full shadow-md rounded  justify-start items-center flex-col gap-3 p-5">
            <div className="flex justify-start items-center gap-3">
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
              <FontAwesomeIcon icon={faStar} className="text-[#0643A2] w-5" />
            </div>
            <p className="text-lg max-w-[250px] font-normal text-[#676767] leading-7">
              It here are many variations of ges ofm Ipsum availa majority
              teration in some form
            </p>
            <div className="flex justify-start items-center gap-3">
              <Image src={"/woman.png"} width={58} height={58} alt=""/>
              <div>
                {" "}
                <h5 className="text-lg font-bold font-nunito text-[#0643A2]">
                  Giulia Dalo
                </h5>
                <h6 className="text-cyan text-base font-medium">
                  🇮🇹From Italy
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happy;
