import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Choose = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-12 -mt-[50px] sm:mt-[0px]">
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <h3 className="text-cyan font-bold font-nunito text-base sm:text-lg">
          Why Choose Us
        </h3>
        <h2 className="text-main-text max-w-[450px] leading-[1.1] font-extrabold text-[30px] sm:text-[32px] font-nunito">
          Successful medical galleries of the clinic
        </h2>
      </div>
      <Splide
        options={{
          arrows: false,
          pagination: true,
          width: "100%",
          perPage: 4,
          perMove: 1,
          gap: "20px",
          rewind: true,
          height: "600px",
          breakpoints: {
            1337: {
              perPage: 3,
            },
            1043: {
              perPage: 2,
            },
            660: {
              perPage: 1,
            },
          },
        }}
        className="slider choose-slider"
      >
        <SplideSlide>
          <div className="w-full max-w-[450px] h-[500px] relative">
            <Image fill src={"/choose.png"} style={{ objectFit: "cover" }} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-full max-w-[450px] h-[500px] relative">
            <Image fill src={"/choose.png"} style={{ objectFit: "cover" }} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-full max-w-[450px] h-[500px] relative">
            <Image fill src={"/choose.png"} style={{ objectFit: "cover" }} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-full max-w-[450px] h-[500px] relative">
            <Image fill src={"/choose.png"} style={{ objectFit: "cover" }} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-full max-w-[450px] h-[500px] relative">
            <Image fill src={"/choose.png"} style={{ objectFit: "cover" }} />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Choose;
