import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const DoctorCard = ({ image, specialist, name, desc }) => {
  return (
    <div className="flex pb-5 min-h-[500px] sm:min-h-[580px] w-[370px] justify-start items-start flex-col bg-white shadow-lg overflow-hidden rounded-[10px]">
      <Image
        width={370}
        height={310}
        src={image}
        style={{ objectFit: "contain" }}
      />
      <div className="flex flex-col mt-4 justify-start items-start gap-1 px-5">
        <h2 className="text-[28px] font-bold text-main-text font-nunito leading-[1]">
          {name}
        </h2>
        <h3 className="text-cyan font-medium text-sm font-nunito mt-2 mb-3">
          {specialist}
        </h3>
        <p className="text-[#6A6A6A] leading-[24px] text-[15px] font-nunito">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Doctors = () => {
  return (
    <div className="flex w-full mb-96  relative h-[560px] justify-center isolate items-center mt-[80px]">
      <div className="w-full h-full absolute left-0 top-0 -z-10">
        <Image src={"/doctor-bg.png"} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="w-full absolute top-[5%] px-5 max-w-[1183px] flex justify-start gap-[70px] items-center flex-col">
        <div className="flex flex-col justify-center text-center items-center gap-1">
          <h3 className="text-white font-bold font-nunito text-2xl">
            Team Members
          </h3>
          <h2 className="text-white font-bold font-nunito text-4xl">
            Meet Our Doctors
          </h2>
        </div>
        <Splide
          options={{
            arrows: false,
            pagination: true,
            width: "100%",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            rewind: true,
            height: "650px",
            breakpoints: {
              1183: {
                perPage: 2,
              },
              760: {
                perPage: 1,
              },
              640: {
                height: "600px",
              },
            },
          }}
          className="slider"
        >
          <SplideSlide>
            <DoctorCard
              image={"/doctor1.png"}
              name={"Dr. Chard Muldone"}
              specialist="Cardiology specialist"
              desc="Medical dolor sit amet. consectetur cing elit. sed do eiusmod
                  Medical dolor sit amet consectetur."
            />
          </SplideSlide>{" "}
          <SplideSlide>
            <DoctorCard
              image={"/doctor2.png"}
              name={"Dr. Soldoone Jak"}
              specialist="Cardiology specialist"
              desc="Medical dolor sit amet. consectetur cing elit. sed do eiusmod
                  Medical dolor sit amet consectetur."
            />
          </SplideSlide>{" "}
          <SplideSlide>
            <DoctorCard
              image={"/doctor2.png"}
              name={"Dr. Soldoone Jak"}
              specialist="Cardiology specialist"
              desc="Medical dolor sit amet. consectetur cing elit. sed do eiusmod
                  Medical dolor sit amet consectetur."
            />
          </SplideSlide>{" "}
          <SplideSlide>
            <DoctorCard
              image={"/doctor1.png"}
              name={"Dr. Chard Muldone"}
              specialist="Cardiology specialist"
              desc="Medical dolor sit amet. consectetur cing elit. sed do eiusmod
                  Medical dolor sit amet consectetur."
            />
          </SplideSlide>{" "}
        </Splide>
      </div>
    </div>
  );
};

export default Doctors;
