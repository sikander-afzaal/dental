import Head from "next/head";
import Best from "../components/landing/Best";
import Brand from "../components/Brand";
import Choose from "../components/landing/Choose";
import Doctors from "../components/Doctors";
import Faq from "../components/landing/Faq";
import Happy from "../components/Happy";
import LandingHero from "../components/landing/LandingHero";
import Pride from "../components/Pride";
import Product from "../components/Product";
import Steps from "../components/Steps";
import Work from "../components/landing/Work";
import { fetchDoctors } from "../queries/doctors";

export default function Home({ doctors }) {
  return (
    <div>
      <LandingHero />
      <Best />
      <Work />
      <Steps />
      <Pride />
      <Doctors doctors={doctors} />
      <Choose />
      <Faq />
      <Brand />
      <Product />
      <Happy />
    </div>
  );
}

export const getStaticProps = async ({ query, locale }) => {
  const doctors = await fetchDoctors(locale);

  return {
    props: {
      doctors: doctors.data,
    },
  };
};
