import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { languageAtom } from "../../state";
import { fetchTreatments } from "../../queries/treatments";

const Navbar = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const setLanguage = useSetAtom(languageAtom);
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (language) => {
    setOpenHeader(false);
    setLanguage(language);
    if (!pathname.includes("/treatments/[id]"))
      router.push({ pathname, query }, asPath, { locale: language });
    else {
      const treatment = treatments.find((e) => e.id === parseInt(query.id));

      if (treatment && treatment.attributes.locale === language) {
        router.push({ pathname, query }, asPath, { locale: language });
      } else if (treatment) {
        const treatmentLoc = treatment.attributes.localizations.data.find(
          (e) => e.attributes.locale === language
        );

        router.push(
          {
            pathname,
            query: { id: treatmentLoc ? treatmentLoc.id.toString() : query.id },
          },
          treatmentLoc ? undefined : asPath,
          {
            locale: language,
          }
        );
      } else {
        router.push({ pathname, query }, asPath, { locale: language });
      }
    }
  };

  useEffect(() => {
    const getTreatments = async () => {
      const treatments = await fetchTreatments(locale);

      const treatmentsData = treatments.data.map((treat) => {
        return {
          id: treat.id,
          name: treat.attributes.name,
          ...treat,
        };
      });
      setTreatments(treatmentsData);
    };

    getTreatments();
  }, [locale]);

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="flex h-auto  items-center py-5 lg:py-0 lg:h-[50px] justify-center  w-full bg-[#0643A2] px-5">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start gap-4 sm:gap-0 w-full max-w-[1440px]">
          <div className="flex justify-start items-start lg:items-center gap-4 lg:flex-row flex-col">
            <p className="text-white text-sm">Blloku, Tiranë, Albania </p>
            <p className="text-white text-sm">Email: info@dentalcareone.com</p>
            <p className="text-white text-sm">Office Open: 9.00 am - 8.00 pm</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <a className="text-white rounded-md p-2   bg-[#004CA6]" href="#">
              <FontAwesomeIcon
                className="text-white text-lg w-5 h-5"
                icon={faFacebookF}
              />
            </a>
            <a className="text-white rounded-md p-2   bg-[#004CA6]" href="#">
              <FontAwesomeIcon
                className="text-white text-lg w-5 h-5"
                icon={faInstagram}
              />
            </a>
            <a className="text-white rounded-md p-2   bg-[#004CA6]" href="#">
              <FontAwesomeIcon
                className="text-white text-lg w-5 h-5"
                icon={faTwitter}
              />
            </a>
            <a className="text-white rounded-md p-2   bg-[#004CA6]" href="#">
              <FontAwesomeIcon
                className="text-white text-lg w-5 h-5"
                icon={faTelegramPlane}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-[92px] justify-center items-center w-full bg-white px-5 relative">
        <div className="flex justify-between items-center w-full max-w-[1440px]">
          <div className="flex justify-start items-center gap-10 2xl:gap-[103px] ">
            <Link href="/">
              <Image
                src={"/logo.png"}
                width={170}
                height={54}
                alt="logo"
                className="w-[170px] lg:w-[100px] 2xl:w-auto h-auto"
              />
            </Link>
            <div
              onClick={() => setOpenHeader(false)}
              className={`${
                openHeader ? "block" : "hidden"
              } bg-black opacity-60 z-50 fixed w-full h-screen top-0 left-0`}
            ></div>
            <nav
              className={`lg:static z-[60] fixed top-0 ${
                openHeader ? "right-0" : "-right-[600px]"
              } lg:right-0 flex-col lg:flex-row bg-white h-screen lg:h-auto flex justify-start w-full max-w-[360px] lg:p-0 py-24 px-9 lg:max-w-max lg:w-auto lg:justify-center items-start lg:items-center gap-6 lg:gap-4 xl:gap-6 transition-all duration-1000 lg:overflow-visible overflow-y-auto`}
            >
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setOpenHeader(false)}
                className="block absolute top-5 right-5 lg:hidden text-text-black w-4 cursor-pointer"
              />
              <Link
                href="/"
                onClick={() => setOpenHeader(false)}
                className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setOpenHeader(false)}
                className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
              >
                About Us
              </Link>
              <div className="relative lg:h-[92px]">
                <button
                  onMouseEnter={() => setDropDown(true)}
                  onClick={() => setDropDown((prev) => !prev)}
                  onMouseLeave={() => setDropDown(false)}
                  className="flex  lg:h-full gap-2 items-center"
                >
                  <p className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black">
                    Treatments
                  </p>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-black text-[16px] w-4 transition-all duration-150 ${
                      dropDown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {dropDown && (
                  <div
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                    className={` rounded-lg flex transition-all duration-300 py-2 lg:max-h-[500px] overflow-y-auto hide-scroll static lg:absolute lg:px-2 top-[80%] lg:bg-white lg:shadow-2xl lg:drop-shadow-2xl  lg:z-[60] min-w-[220px]  w-max flex-col `}
                  >
                    {treatments.map((t, index) => (
                      <Link
                        href="/treatments/[id]"
                        as={`/treatments/${t.id}`}
                        className="text-slate-500 w-full lg:px-2 rounded-lg transition-all duration-150 py-4 hover:text-white  hover:bg-cyan"
                        key={index}
                        onClick={() => {
                          setOpenHeader(false);
                        }}
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/before-and-after"
                onClick={() => setOpenHeader(false)}
                className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
              >
                Before & After
              </Link>
              <a
                href="#"
                onClick={() => setOpenHeader(false)}
                className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
              >
                Dental Tourism
              </a>
              <a
                href="#"
                onClick={() => setOpenHeader(false)}
                className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
              >
                Contact Us
              </a>
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => changeLanguage("en-US")}
                  className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
                >
                  🇺🇸
                </button>
                <button
                  onClick={() => changeLanguage("it")}
                  className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
                >
                  🇮🇹
                </button>
                <button
                  onClick={() => changeLanguage("sq")}
                  className="font-bold text-lg lg:text-sm xl:text-base  no-underline text-text-black"
                >
                  🇦🇱
                </button>
              </div>
              <div className="flex lg:hidden justify-center items-center gap-5">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-black text-[16px] w-5"
                />
                <Image src={"/grid.png"} width={26} height={24} alt="grid" />
                <button className="bg-cyan text-white font-semibold w-[157px] h-[51px] rounded text-sm">
                  APPOINTMENT
                </button>
              </div>
            </nav>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setOpenHeader(true)}
            className="block lg:hidden text-text-black w-5 cursor-pointer"
          />
          <div className="hidden lg:flex justify-center items-center gap-5">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-black text-[16px] w-5"
            />
            <Image src={"/grid.png"} width={26} height={24} alt="grid" />
            <button className="bg-cyan text-white font-semibold w-[157px] h-[51px] rounded text-sm">
              APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
