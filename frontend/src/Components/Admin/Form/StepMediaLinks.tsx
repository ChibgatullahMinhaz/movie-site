import { useState } from "react";

interface Props {
  onNext: (data: any) => void;
  onBack: () => void;
  defaultValues?: any;
}

export default function StepMediaLinks({ onNext, onBack, defaultValues }: Props) {
  const [links, setLinks] = useState(defaultValues?.links || []);

  const addLink = () => setLinks([...links, { quality: "", type: "download", url: "" }]);
  const updateLink = (i: number, field: string, value: string) => {
    const newList = [...links];
    newList[i][field] = value;
    setLinks(newList);
  };

  const onSubmit = () => onNext({ links });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">📥 Media / Download Links</h2>

      {links.map((link, i) => (
        <div key={i} className="border rounded-lg p-3 mb-3">
          <select
            value={link.quality}
            onChange={(e) => updateLink(i, "quality", e.target.value)}
            className="input mb-2"
          >
            <option value="">Select Quality</option>
            <option value="480p">480p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
          </select>

          <select
            value={link.type}
            onChange={(e) => updateLink(i, "type", e.target.value)}
            className="input mb-2"
          >
            <option value="download">Download</option>
            <option value="stream">Stream</option>
          </select>

          <input
            placeholder="File URL"
            value={link.url}
            onChange={(e) => updateLink(i, "url", e.target.value)}
            className="input"
          />
        </div>
      ))}

      <button onClick={addLink} className="btn-primary mb-3">+ Add Link</button>

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">← Back</button>
        <button onClick={onSubmit} className="btn-primary">Next →</button>
      </div>
    </div>
  );
}
