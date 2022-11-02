import Image from "next/image";

const Clinic = () => {
  return (
    <div className="w-full px-5 mt-[80px] mb-[100px] justify-center items-center flex flex-col">
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h3 className="text-cyan font-bold font-nunito text-base sm:text-xl">
          Dental Care One
        </h3>
        <h2 className="text-main-text max-w-[412px] leading-[1.1] font-black text-[30px] sm:text-[42px] font-avenir">
          Our Clinic
        </h2>
      </div>
      <div className=" w-full self-end mt-[40px] gap-5 max-w-[full] overflow-x-auto flex justify-start items-center">
        <Image
          src={"/clinic.png"}
          width={430}
          height={720}
          style={{ objectFit: "cover" }}
        />
        <Image
          src={"/clinic.png"}
          width={430}
          height={720}
          style={{ objectFit: "cover" }}
        />
        <Image
          src={"/clinic.png"}
          width={430}
          height={720}
          style={{ objectFit: "cover" }}
        />
        <Image
          src={"/clinic.png"}
          width={430}
          height={720}
          style={{ objectFit: "cover" }}
        />
        <Image
          src={"/clinic.png"}
          width={430}
          height={720}
          style={{ objectFit: "cover" }}
        />
        <Image
          src={"/clinic.png"}
          width={430}
          height={720}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Clinic;
