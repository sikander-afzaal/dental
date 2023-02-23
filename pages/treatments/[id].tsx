import { NextPage } from "next";
import { useEffect, useState } from "react";
import TreatmentComp from "../../components/second-page/Treatment";
import { fetchDoctors, IDoctor } from "../../queries/doctors";
import { fetchTreatment, ITreatment } from "../../queries/treatments";

// interface Props {
//   treatment: ITreatment;
//   doctors: IDoctor;
// }

interface Props {
  locale: string;
  id: number;
}

const Treatment: NextPage<Props> = ({ locale, id }) => {
  const [treatment, setTreatment] = useState<any>();
  const [doctors, setDoctors] = useState<any>();
  const [loading, setLading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLading(true);
      const treatment = await fetchTreatment(id, locale);

      const doctors = await fetchDoctors(locale);

      setTreatment(treatment.data);
      setDoctors(doctors.data);
      setLading(false);
    };

    fetchData();
  }, [locale, id]);

  if (loading)
    return (
      <div className="container mx-auto w-full h-screen flex items-center justify-center">
        <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-lg shadow rounded-full text-white bg-cyan  transition ease-in-out duration-150 cursor-not-allowed">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      </div>
    );

  return <TreatmentComp treatment={treatment} doctors={doctors} />;
};

export async function getServerSideProps({ params, query, locale }) {
  const id = params.id;

  return {
    props: {
      id,
      locale,
    },
  };
}

export default Treatment;
