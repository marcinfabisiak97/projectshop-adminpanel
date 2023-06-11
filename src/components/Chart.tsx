import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
type ChartProps = {
  title: string;
  data: { name: string; "Active User": number }[];
  dataKey: string;
  grid: boolean;
};
const Chart: React.FC<ChartProps> = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          <Tooltip />
          {grid ? (
            <CartesianGrid stroke="#c6c6c7" strokeDasharray="5 5" />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
