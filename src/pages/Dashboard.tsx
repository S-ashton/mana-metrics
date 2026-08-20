import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <main>
      <h1>ManaMetrics</h1>
      <p>Your Commander performance at a glance.</p>

      <StatCard
        label="Games Played"
        value="82"
        description="Across all recorded games"
      />

      <StatCard
        label="Win Rate"
        value="52.4%"
        description="Based on recorded results"
      />
    </main>
  );
}

export default Dashboard;