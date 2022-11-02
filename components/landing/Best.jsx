import Image from "next/image";

const Card = ({ image, icon, head, desc }) => {
  return (
    <div className="flex justify-start rounded-[10px] pb-5 items-start overflow-hidden shadow-lg flex-col ">
      <div className="relative w-full h-[240px]">
        <Image src={image} fill />
        <div className="bg-white overflow-hidden flex justify-center items-center absolute w-[70px] h-[67px] bottom-2 right-3 shadow rounded-md">
          <Image src={icon} width={35} height={39} />
        </div>
      </div>
      <div className="flex justify-start flex-col px-5 items-start gap-1 my-7">
        <h2 className="text-[21px] font-bold font-nunito text-main-text">
          {head}
        </h2>
        <p className="text-sm font-nunito font-medium text-gray-text">{desc}</p>
      </div>
      <button className="bg-cyan mx-5 uppercase cursor-pointer text-white font-semibold w-[157px] h-[51px] rounded text-sm">
        Read More
      </button>
    </div>
  );
};

const Best = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 mt-[50px] sm:mt-[100px] lg:mt-[210px]">
      <div className="max-w-[1183px] flex w-full justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h3 className="text-cyan font-bold font-nunito text-base sm:text-xl">
            Quality dental care at the right price.
          </h3>
          <h2 className="text-main-text max-w-[412px] leading-[1.1] font-black text-[30px] sm:text-[42px] font-avenir">
            Best Dental Clinic in Albania
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10 mt-10 auto-rows-fr">
          <Card
            icon={"/brain.png"}
            image={"/best1.png"}
            head="ORTHODONTICS"
            desc={
              "We are give best quality health service & facility of latest technology so patient."
            }
          />
          <Card
            icon={"/brain.png"}
            image={"/best1.png"}
            head="ORTHODONTICS"
            desc={
              "We are give best quality health service & facility of latest technology so patient."
            }
          />
          <Card
            icon={"/brain.png"}
            image={"/best1.png"}
            head="ORTHODONTICS"
            desc={
              "We are give best quality health service & facility of latest technology so patient."
            }
          />
          <Card
            icon={"/brain.png"}
            image={"/best1.png"}
            head="ORTHODONTICS"
            desc={
              "We are give best quality health service & facility of latest technology so patient."
            }
          />
          <Card
            icon={"/brain.png"}
            image={"/best1.png"}
            head="ORTHODONTICS"
            desc={
              "We are give best quality health service & facility of latest technology so patient."
            }
          />
          <Card
            icon={"/brain.png"}
            image={"/best1.png"}
            head="ORTHODONTICS"
            desc={
              "We are give best quality health service & facility of latest technology so patient."
            }
          />
        </div>
        <button className="bg-cyan uppercase cursor-pointer text-white font-semibold w-[157px] h-[51px] rounded text-sm mt-10 self-center">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Best;
