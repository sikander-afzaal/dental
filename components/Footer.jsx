import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full justify-between mt-5 flex-col items-center flex bg-[#0043A2] ">
      <footer className="flex justify-start items-start flex-col w-full max-w-[1183px] px-5">
        <div className="py-5 lg:p-0 lg:h-[100px] flex-col lg:flex-row flex w-full justify-between items-center sm:items-start lg:items-center gap-6 lg:gap-2">
          <a
            href="#"
            className="flex justify-center items-center gap-2 text-base text-white no-underline"
          >
            <FontAwesomeIcon icon={faPhone} className="text-cyan w-4" />{" "}
            <strong>Phone Number:</strong> +089 5699 694 58
          </a>
          <a
            href="#"
            className="flex justify-center items-center gap-2 text-base text-white no-underline"
          >
            <FontAwesomeIcon icon={faMapPin} className="text-cyan w-4" />{" "}
            <strong>Address:</strong> 66 Broklyn Street, New York
          </a>
          <a
            href="#"
            className="flex justify-center items-center gap-2 text-base text-white no-underline"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-cyan w-4" />{" "}
            <strong>Email:</strong> demo.info@gmail.com
          </a>
        </div>
        <div className="lg:flex-row flex-col gap-8 flex w-full my-5 justify-between items-center sm:items-start lg:gap-4">
          <div className="flex justify-start items-center sm:text-left text-center sm:items-start flex-col gap-3 sm:gap-5">
            <h2 className="font-bold font-nunito text-xl text-white">
              About Us
            </h2>
            <p className="font-normal max-w-[300px] leading-[22px] font-nunito text-sm text-white">
              A monthly digest of the latest news and venenat is urna resources.
              our clinic was created to make your smile beautiful, healthy and
              snow-white. is venenatis urna resources. will do everything eso
              ciently and quickly!
            </p>
            <div className="flex justify-start items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center rounded bg-[#5285C3] transition-all hover:bg-cyan cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white w-4 h-4"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center rounded bg-[#5285C3] transition-all hover:bg-cyan cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white w-4 h-4"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center rounded bg-[#5285C3] transition-all hover:bg-cyan cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white w-4 h-4"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center sm:text-left text-center sm:items-start flex-col gap-3 sm:gap-5">
            <h2 className="font-bold font-nunito text-xl text-white">
              About Us
            </h2>
            <div className="flex justify-start items-center sm:items-start gap-2 flex-col">
              {" "}
              <a className="font-normal max-w-[300px] leading-[22px] font-nunito text-sm text-white">
                Referral Partners
              </a>
              <a className="font-normal max-w-[300px] leading-[22px] font-nunito text-sm text-white">
                Space Services
              </a>
              <a className="font-normal max-w-[300px] leading-[22px] font-nunito text-sm text-white">
                Landlords
              </a>
              <a className="font-normal max-w-[300px] leading-[22px] font-nunito text-sm text-white">
                Refer a Friend
              </a>
              <a className="font-normal max-w-[300px] leading-[22px] font-nunito text-sm text-white">
                Event planners
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center sm:text-left text-center sm:items-start flex-col gap-3 sm:gap-5">
            <h2 className="font-bold font-nunito text-xl text-white">
              Recent Post
            </h2>
            <div className="flex justify-start items-center sm:items-start gap-6 flex-col">
              <div className="flex justify-start flex-col sm:flex-row items-center gap-3">
                <Image
                  src={"/foot-img.png"}
                  width={71}
                  style={{ borderRadius: "50%" }}
                  height={71}
                />
                <div>
                  <p className="font-nunito mb-2 max-w-[112px] font-semibold text-white text-sm">
                    Start a fundraiser yourself
                  </p>
                  <p className="font-nunito font-medium text-white text-xs">
                    27 March 2021
                  </p>
                </div>
              </div>
              <div className="flex justify-start flex-col sm:flex-row items-center gap-3">
                <Image
                  src={"/foot-img.png"}
                  width={71}
                  style={{ borderRadius: "50%" }}
                  height={71}
                />
                <div>
                  <p className="font-nunito mb-2 max-w-[112px] font-semibold text-white text-sm">
                    Start a fundraiser yourself
                  </p>
                  <p className="font-nunito font-medium text-white text-xs">
                    27 March 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center sm:text-left text-center sm:items-start flex-col gap-3 sm:gap-5">
            <h2 className="font-bold font-nunito text-xl text-white">
              Recent Post
            </h2>
            <p className="font-normal max-w-[242px] leading-[22px] font-nunito text-sm text-white">
              Sign up now for weekly news and our updates now.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-solid border-2 rounded-md border-[#A9DFDB] w-[240px] h-[50px] pl-4 text-white placeholder:text-white focus:outline-none font-nunito text-sm font-medium"
            />
            <button className="bg-cyan cursor-pointer uppercase text-white font-medium w-[157px] h-[51px] rounded text-sm">
              Send Message
            </button>
          </div>
        </div>
      </footer>
      <div className="bg-[#004BB6] flex w-full mt-5 justify-center items-center py-4 ">
        <div className="flex flex-col sm:flex-row sm:gap-0 gap-2 justify-between items-center w-full max-w-[1183px] px-5">
          <p className="text-white font-semibold font-nunito text-sm">
            Design & Developed nextstudio
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              className="text-white font-medium no-underline font-nunito text-sm"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-white font-medium no-underline font-nunito text-sm"
              href="#"
            >
              Gallery
            </a>
            <a
              className="text-white font-medium no-underline font-nunito text-sm"
              href="#"
            >
              Projects
            </a>
            <a
              className="text-white font-medium no-underline font-nunito text-sm"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
