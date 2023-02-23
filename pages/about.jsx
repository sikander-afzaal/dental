import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div className="w-full -mb-[50px] flex justify-center items-center flex-col gap-5 mt-10">
      <div className="flex  px-5 justify-center items-center flex-col max-w-[1183px] w-full">
        <iframe
          className="w-full object-contain aspect-video lg:min-h-[600px]"
          src="https://www.youtube.com/embed/UOmpWBNj1Y4"
          title="Godent Modern Dental Facility"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="flex justify-center my-10 items-center flex-col gap-4 w-full text-center">
          <h3 className="text-[28px] text-cyan font-semibold">Our Clinic</h3>
          <p className="text-base leading-[1.6] max-w-[800px]">
            We are welcoming you in our way-out modern medical complex with high
            medical standards. We are located in the hearth of Istanbul, close
            to the touristic area and just a few steps away from our partner
            hotel. With our patient oriented service approach we served
            thousands of patients from over 50 countries so far.{" "}
          </p>
        </div>
        <div className="grid gap-8 w-full lg:max-w-none max-w-[600px] grid-cols-1 lg:grid-cols-3 grid-rows-[360px__360px__360px__360px] lg:grid-rows-2">
          <Image
            src="/about1.jpg"
            alt="..."
            className="lg:col-span-1 rounded-md lg:row-span-2 w-full h-full"
            width={360}
            style={{ objectFit: "cover" }}
            height={700}
          />
          <Image
            src="/about2.jpg"
            alt="..."
            className="lg:col-span-2 rounded-md lg:row-span-1 w-full h-full"
            width={750}
            height={350}
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/about3.jpg"
            alt="..."
            className=" rounded-md  w-full h-full"
            width={360}
            height={300}
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/about4.jpg"
            alt="..."
            className=" rounded-md w-full h-full"
            width={300}
            height={330}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex justify-between lg:flex-row flex-col lg:max-w-none max-w-[500px]  items-start w-full gap-10 lg:gap-6 mb-7 mt-20">
          <div className="grid grid-rows-[48px__50px__auto] gap-3 items-start lg:items-center grid-cols-1 w-full">
            <Image
              src="/ico-hospital.svg"
              alt="hospital"
              width={48}
              height={48}
              className="lg:justify-self-center"
            />
            <h4 className="text-cyan font-semibold text-xl my-3  lg:text-center">
              High Medical Standards
            </h4>
            <ul className="flex list-none justify-start items-start flex-col gap-3 ">
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Specialist medical staffs with high experience
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Certified by Ministry of Health{" "}
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                UV sterilization in each room
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Hygienic sliding doors{" "}
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                High-end sterilization units{" "}
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Air purifier system in each room
              </li>
            </ul>
          </div>
          <div className="grid grid-rows-[48px__50px__auto] gap-3 items-start lg:items-center grid-cols-1 w-full">
            <Image
              src="/ico-patient.svg"
              alt="hospital"
              width={48}
              height={48}
              className="lg:justify-self-center"
            />
            <h4 className="text-cyan font-semibold text-xl my-3  lg:text-center">
              Patient Oriented Service
            </h4>
            <ul className="flex list-none justify-start items-start flex-col gap-3 ">
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Patient case managers speak in your native language
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Netflix, Youtube Premium, Wifi access in the rooms
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Patient-specific cabinet locks
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Free in-door restaurant and cafe
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                In the center of the city, next to the touristic area
              </li>
            </ul>
          </div>
          <div className="grid grid-rows-[48px__50px__auto] gap-3 items-start lg:items-center grid-cols-1 w-full">
            <Image
              src="/ico-bookmark.svg"
              alt="hospital"
              width={48}
              height={48}
              className="lg:justify-self-center"
            />
            <h4 className="text-cyan font-semibold text-xl my-3 self-center lg:text-center">
              Latest Technologies
            </h4>
            <ul className="flex list-none justify-start items-start flex-col gap-3 ">
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Consumables from US and European medical suppliers
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Low noise dental drills
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                3D scanning, 3D printing and Cad-Cam supported laboratory
              </li>
              <li className="text-base text-gray-text flex justify-start items-start gap-2">
                <span className="min-w-[5px] aspect-square bg-gray-text rounded-full mt-2"></span>{" "}
                Teledentistry support
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-16 flex justify-center mb-10 items-center flex-col gap-10">
          <h3 className="text-[28px] text-cyan font-semibold">
            Accreditations
          </h3>
          <div className="grid grid-cols-3 place-items-center md:flex justify-evenly items-center md:w-full gap-3 flex-wrap">
            <Image
              src={"/award.svg"}
              alt="award"
              width={126}
              className="rounded-full"
              height={126}
            />
            <Image
              src={"/award.svg"}
              alt="award"
              width={126}
              className="rounded-full"
              height={126}
            />
            <Image
              src={"/award.svg"}
              alt="award"
              width={126}
              className="rounded-full"
              height={126}
            />
            <Image
              src={"/award.svg"}
              alt="award"
              width={126}
              className="rounded-full"
              height={126}
            />
            <Image
              src={"/award.svg"}
              alt="award"
              width={126}
              className="rounded-full"
              height={126}
            />
            <Image
              src={"/award.svg"}
              alt="award"
              width={126}
              className="rounded-full"
              height={126}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-[rgba(45,83,99,1)] py-[80px] md:py-[130px]">
        <div className="text-center flex justify-center items-center flex-col max-w-[1183px] px-5 gap-3">
          <h3 className="text-2xl md:text-[36px] font-bold text-white">
            Plan your treatment and get a quote online.
          </h3>
          <h4 className="text-base sm:text-lg text-white opacity-70">
            30 minutes free online video and phone consultation. Schedule your
            virtual visit.
          </h4>
          <div className="flex justify-center md:flex-row flex-col items-center gap-3 mt-7">
            <Link href={"/booking"}>
              <button className="hover:bg-white transition-all duration-300 flex justify-center items-center gap-2 rounded-full bg-[rgba(72,203,212,1)] text-[rgba(51,83,96,1)] w-[248px] h-[52px] text-[15px] font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
                Free Video Consult
              </button>
            </Link>
            <div className="md:block hidden w-[2px] h-[100px] bg-[rgba(235,235,235,.3)]"></div>
            <Link href={"/booking"}>
              <button className="hover:bg-white transition-all duration-300  flex justify-center items-center gap-2 rounded-full bg-[rgba(224,179,187,1)] text-[rgba(51,83,96,1)] w-[248px] h-[52px] text-[15px] font-bold">
                {" "}
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
                Free phone Consult
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
