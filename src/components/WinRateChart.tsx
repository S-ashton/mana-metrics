import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { game: 10, winRate: 40 },
  { game: 20, winRate: 45 },
  { game: 30, winRate: 43 },
  { game: 40, winRate: 48 },
  { game: 50, winRate: 46 },
  { game: 60, winRate: 51 },
  { game: 70, winRate: 49 },
  { game: 82, winRate: 52.4 },
];

function WinRateChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <p className="chart-label">PERFORMANCE</p>
          <h2>Win Rate Over Time</h2>
        </div>
      </div>

      <div className="chart-container">
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
  data={data}
  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
>
  <CartesianGrid
    strokeDasharray="3 3"
    vertical={false}
  />

  <XAxis
    dataKey="game"
    tickLine={false}
    axisLine={false}
    tick={{ fontSize: 12, fill: "#666" }}
  />

  <YAxis
    domain={[0, 100]}
    tickFormatter={(value) => `${value}%`}
    tickLine={false}
    axisLine={false}
    tick={{ fontSize: 12, fill: "#666" }}
  />

  <Tooltip
    formatter={(value) => [`${value}%`, "Win Rate"]}
    labelFormatter={(label) => `Game ${label}`}
  />

  <Line
    type="monotone"
    dataKey="winRate"
    stroke="#111111"
    strokeWidth={2}
    dot={false}
    activeDot={{ r: 5 }}
  />
</LineChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}

export default WinRateChart;