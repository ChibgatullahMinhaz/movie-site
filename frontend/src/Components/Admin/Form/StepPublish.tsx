interface Props {
  onSubmit: () => void;
  onBack: () => void;
  data: any;
}

export default function StepPublish({ onSubmit, onBack, data }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">🚀 Review & Publish</h2>

      <pre className="bg-[#101828] p-3 rounded-lg text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>

      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="btn-secondary">← Back</button>
        <button onClick={onSubmit} className="btn-primary">Submit ✅</button>
      </div>
    </div>
  );
}
