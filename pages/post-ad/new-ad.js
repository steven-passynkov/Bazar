import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Head from "next/head";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Step1 from "../../components/StepProgressBar/step1";
import Step2 from "../../components/StepProgressBar/step2";
import Step3 from "../../components/StepProgressBar/step3";

export default function new_ad() {
  const step1Content = <Step1 />;
  const step2Content = <Step2 />;
  const step3Content = <Step3 />;

  function step1Validator() {
    return true;
  }

  function step2Validator() {
    return true;
  }

  function step3Validator() {
    return true;
  }

  function onFormSubmit() {

  }

  return (
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
            validator: step1Validator,
          },
          {
            label: "Step 2",
            name: "step 2",
            content: step2Content,
            validator: step2Validator,
          },
          {
            label: "Step 3",
            name: "step 3",
            content: step3Content,
            validator: step3Validator,
          },
        ]}
      />

      <Footer />
    </div>
  );
}
