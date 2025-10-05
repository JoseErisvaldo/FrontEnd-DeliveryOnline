export default function HeaderTitle({ title }: { title: string }) {
  return (
    <div className="mb-4 border-b p-2">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}