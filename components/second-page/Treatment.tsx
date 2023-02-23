import React, { FC, useRef } from "react";
import { url } from "../../queries";
import { IDoctor } from "../../queries/doctors";
import { ITreatment } from "../../queries/treatments";
import Brand from "../Brand";
import Doctors from "../Doctors";
import Happy from "../Happy";
import Pride from "../Pride";
import Steps from "../Steps";
import Faq from "./Faq";
import Hero from "./Hero";
import Session from "./Session";
import Specialist from "./Specialist";

interface Props {
  treatment: ITreatment;
  doctors: IDoctor;
}

const Treatment: FC<Props> = ({ treatment, doctors }) => {
  const attributes = treatment.attributes;
  const name = attributes.name;
  const title = attributes.title;
  const description = attributes.description;
  const phone = attributes.phone;
  const mainImage = `${url}${attributes.main_image.data.attributes.url}`;
  const cta = attributes.cta;
  const ctaTitle = attributes.cta_title;
  const ctaDescription = attributes.cta_description;
  const ctaImages = attributes.cta_images.data.map(
    (img) => `${url}${img.attributes.url}`
  );

  const questions = attributes.Questions;

  const learnMoreRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero
        name={name}
        title={title}
        description={description}
        phone={phone}
        mainImage={mainImage}
        learnMoreRef={learnMoreRef}
        cta={cta}
      />

      <Session
        ref={learnMoreRef}
        title={ctaTitle}
        description={ctaDescription}
        images={ctaImages}
        cta={cta}
      />

      <Faq questions={questions} />
      <Steps />
      <Pride />
      <Doctors doctors={doctors} />
      <Brand />
      <Specialist />
      <Happy />
    </>
  );
};

export default Treatment;
