type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div>
      <h3 className="text-5xl font-black text-purple-400">
        {value}
      </h3>

      <p className="mt-2 text-gray-400">
        {label}
      </p>
    </div>
  );
}