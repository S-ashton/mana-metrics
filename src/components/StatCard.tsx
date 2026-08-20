interface StatCardProps {
  label: string;
  value: string;
  description?: string;
}

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <h2 className="stat-value">{value}</h2>

      {description && (
        <span className="stat-description">{description}</span>
      )}
    </div>
  );
}

export default StatCard;