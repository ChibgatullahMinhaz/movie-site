import { useState } from "react";

interface Props {
  onNext: (data: any) => void;
  onBack: () => void;
  defaultValues?: any;
}

export default function StepCastCrew({ onNext, onBack, defaultValues }: Props) {
  const [cast, setCast] = useState(defaultValues?.cast || []);

  const addCast = () => setCast([...cast, { name: "", role: "" }]);
  const updateCast = (i: number, field: string, value: string) => {
    const newList = [...cast];
    newList[i][field] = value;
    setCast(newList);
  };

  const onSubmit = () => onNext({ cast });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">🎭 Cast & Crew</h2>
      {cast.map((member, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            placeholder="Name"
            value={member.name}
            onChange={(e) => updateCast(i, "name", e.target.value)}
            className="input flex-1"
          />
          <input
            placeholder="Role (e.g. Actor, Director)"
            value={member.role}
            onChange={(e) => updateCast(i, "role", e.target.value)}
            className="input flex-1"
          />
        </div>
      ))}
      <button type="button" onClick={addCast} className="btn-primary mb-3">
        + Add Cast
      </button>

      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="btn-secondary">← Back</button>
        <button onClick={onSubmit} className="btn-primary">Next →</button>
      </div>
    </div>
  );
}
