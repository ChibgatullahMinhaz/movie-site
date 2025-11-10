import { useForm } from "react-hook-form";

interface Props {
  onNext: (data: any) => void;
  defaultValues?: any;
}

export default function StepBasicInfo({ onNext, defaultValues }: Props) {
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues || {},
  });

  const onSubmit = (data: any) => onNext(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">🎬 Basic Info</h2>

      <div>
        <label className="block font-medium">Movie Title</label>
        <input {...register("title", { required: true })} className="input" />
      </div>

      <div>
        <label className="block font-medium">Type</label>
        <select {...register("type")} className="input">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="short">Short Film</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Release Date</label>
        <input type="date" {...register("releaseDate")} className="input" />
      </div>

      <div>
        <label className="block font-medium">Poster URL</label>
        <input {...register("poster")} className="input" />
      </div>

      <div>
        <label className="block font-medium">Synopsis</label>
        <textarea {...register("synopsis")} className="input" rows={3} />
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-primary">Next →</button>
      </div>
    </form>
  );
}
