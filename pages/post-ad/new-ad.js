import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Head from "next/head";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Step1 from "../../components/StepProgressBar/step1";
import Step2 from "../../components/StepProgressBar/step2";
import Step3 from "../../components/StepProgressBar/step3";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

export default function new_ad() {
  const curIsValid1 = useRef(false);
  const curIsValid2 = useRef(false);
  const curIsValid3 = useRef(false);
  const [loading, setLoadingData] = useState(false);

  const step1Content = (
    <Step1
      onUpdateValidator={(value) => {
        curIsValid1.current = value;
      }}
    />
  );
  const step2Content = (
    <Step2
      onUpdateValidator={(value) => {
        curIsValid2.current = value;
      }}
    />
  );
  const step3Content = (
    <Step3
      onUpdateValidator={(value) => {
        curIsValid3.current = value;
      }}
    />
  );

  function onFormSubmit() {
    useEffect(() => {
      setLoadingData(true);
      axios
        .post(
          //what do i put here
        )
        .then((response) => {
          setLoadingData(false);
          <Link href="/home"/>
          
        })
        .catch((error) => {
          console.error(error);
          setLoadingData(false);
        });
    }, [
      //what do i put here
    ]);
  }

  return (
    <div>
    {loading == false ? (
    <div>
      <Head>
        <title>Bazar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav_bar />
      <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={[
          {
            label: "Step 1",
            name: "step 1",
            content: step1Content,
            validator: () => curIsValid1.current,
          },
          {
            label: "Step 2",
            name: "step 2",
            content: step2Content,
            validator: () => curIsValid2.current,
          },
          {
            label: "Step 3",
            name: "step 3",
            content: step3Content,
            validator: () => curIsValid3.current,
          },
        ]}
      />

      <Footer />
    </div>
    ) : (
      <div className="text-center">
        <Spinner />
      </div>
    )}
  </div>
  );
}
