import Best from "../components/Best";
import Brand from "../components/Brand";
import Choose from "../components/Choose";
import Doctors from "../components/Doctors";
import Faq from "../components/Faq";
import LandingHero from "../components/LandingHero";
import Pride from "../components/Pride";
import Steps from "../components/Steps";
import Work from "../components/Work";

const Landing = () => {
  return (
    <>
      <LandingHero />
      <Best />
      <Work />
      <Steps />
      <Pride />
      <Doctors />
      <Choose />
      <Faq />
      <Brand />
    </>
  );
};

export default Landing;
