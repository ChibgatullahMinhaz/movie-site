interface Props {
  currentStep: number;
}

const steps = ["Basic Info", "Cast", "Parts", "Media", "Publish"];

export default function StepIndicator({ currentStep }: Props) {
  return (
    <div className="flex items-center justify-between mb-6">
      {steps.map((step, i) => (
        <div key={i} className="flex-1 text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
              currentStep === i + 1
                ? "bg-blue-600 text-white"
                : currentStep > i + 1
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {i + 1}
          </div>
          <p className="text-sm mt-1">{step}</p>
        </div>
      ))}
    </div>
  );
}
