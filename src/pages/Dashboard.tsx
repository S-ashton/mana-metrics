import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">COMMANDER ANALYTICS</p>
          <h1>ManaMetrics</h1>
          <p className="subtitle">
            Track your games. Understand your deck. Play smarter.
          </p>
        </div>
      </header>

      <section className="stats-grid">
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

        <StatCard
          label="Wins"
          value="43"
          description="Games you've won"
        />

        <StatCard
          label="Losses"
          value="39"
          description="Games you've lost"
        />
      </section>
    </main>
  );
}

export default Dashboard;