import Image from "next/image";

const Brand = () => {
  return (
    <div className="w-full bg-[#0643A2] flex mt-[120px] justify-center items-center">
      <div className="w-full max-w-[1183px] py-14 flex-wrap px-5 flex justify-center items-center gap-8 sm:justify-between">
        <Image
          width={160}
          style={{ objectFit: "contain" }}
          src="/brand1.png"
          height={66}
        />
        <Image
          width={160}
          style={{ objectFit: "contain" }}
          src="/brand2.png"
          height={66}
        />
        <Image
          width={160}
          style={{ objectFit: "contain" }}
          src="/brand3.png"
          height={66}
        />
        <Image
          width={160}
          style={{ objectFit: "contain" }}
          src="/brand4.png"
          height={66}
        />
        <Image
          width={160}
          style={{ objectFit: "contain" }}
          src="/brand5.png"
          height={66}
        />
      </div>
    </div>
  );
};

export default Brand;
