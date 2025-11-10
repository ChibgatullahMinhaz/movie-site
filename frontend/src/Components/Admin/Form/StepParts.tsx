import { useState } from "react";

interface Props {
  onNext: (data: any) => void;
  onBack: () => void;
  defaultValues?: any;
}

export default function StepParts({ onNext, onBack, defaultValues }: Props) {
  const [parts, setParts] = useState(defaultValues?.parts || []);

  const addPart = () => setParts([...parts, { title: "", runtime: "", description: "" }]);
  const updatePart = (i: number, field: string, value: string) => {
    const newList = [...parts];
    newList[i][field] = value;
    setParts(newList);
  };

  const onSubmit = () => onNext({ parts });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">🎞️ Parts / Episodes</h2>

      {parts.map((part, i) => (
        <div key={i} className="border rounded-lg p-3 mb-3">
          <input
            placeholder="Part Title"
            value={part.title}
            onChange={(e) => updatePart(i, "title", e.target.value)}
            className="input mb-2"
          />
          <input
            placeholder="Runtime (minutes)"
            value={part.runtime}
            onChange={(e) => updatePart(i, "runtime", e.target.value)}
            className="input mb-2"
          />
          <textarea
            placeholder="Description"
            value={part.description}
            onChange={(e) => updatePart(i, "description", e.target.value)}
            className="input"
          />
        </div>
      ))}

      <button onClick={addPart} className="btn-primary mb-3">+ Add Part</button>

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">← Back</button>
        <button onClick={onSubmit} className="btn-primary">Next →</button>
      </div>
    </div>
  );
}
