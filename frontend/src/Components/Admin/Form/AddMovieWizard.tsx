import { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepBasicInfo from "./StepBasicInfo";
import StepCastCrew from "./StepCastCrew";
import StepParts from "./StepParts";
import StepMediaLinks from "./StepMediaLinks";
import StepPublish from "./StepPublish";

export default function AddMovieWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const nextStep = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmitAll = () => {
    console.log("✅ FINAL MOVIE DATA:", formData);
    alert("Movie data logged to console ✅");
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#101828] shadow-lg rounded-2xl p-6 my-10">
      <StepIndicator currentStep={step} />

      {step === 1 && <StepBasicInfo onNext={nextStep} defaultValues={formData} />}
      {step === 2 && (
        <StepCastCrew onNext={nextStep} onBack={prevStep} defaultValues={formData} />
      )}
      {step === 3 && (
        <StepParts onNext={nextStep} onBack={prevStep} defaultValues={formData} />
      )}
      {step === 4 && (
        <StepMediaLinks onNext={nextStep} onBack={prevStep} defaultValues={formData} />
      )}
      {step === 5 && (
        <StepPublish onSubmit={handleSubmitAll} onBack={prevStep} data={formData} />
      )}
    </div>
  );
}
