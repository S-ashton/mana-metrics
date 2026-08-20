interface StatCardProps {
  label: string;
  value: string;
  description?: string;
}

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div>
      <p>{label}</p>
      <h2>{value}</h2>

      {description && <span>{description}</span>}
    </div>
  );
}

export default StatCard;