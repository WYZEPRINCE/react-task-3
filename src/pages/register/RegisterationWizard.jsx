import { useState } from "react";
import AddressInput from "./AddressInput";
import AddressInputManual from "./AddressInputManual";
import PersonalInfo from "./PersonalInfo";
import RegisterUser from "./RegisterUser";
import RegisterSuccess from "./RegisterSuccess";

export default function SignupWizard() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  return (
    <>
      {step === 1 && <RegisterUser onNext={next} />}
      {step === 2 && <PersonalInfo onNext={next} onBack={prev} />}
      {step === 3 && <AddressInput onNext={next} onBack={prev} />}
      {step === 4 && <AddressInputManual onNext={next} onBack={prev} />}
      {step === 5 && <RegisterSuccess />}
    </>
  );
}