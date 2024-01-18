import { useState } from "react";
import data from "./data/chartData";
import useChart from "./hooks/useChart";

export default function App() {
  const [chartType, setChartType] = useState("line");
  const chartRef = useChart(data, {}, chartType);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Data of Dipesh Paudel's Company
      </h1>
      <div
        style={{ width: "fit-content", margin: "0 auto", marginTop: "50px" }}
      >
        <label style={{ color: "green", marginRight: "10px" }}>
          Select Chart Type:
        </label>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="pie">Pie</option>
        </select>
      </div>
      <div
        style={{
          width: "800px",
          height: "600px",
          margin: "0 auto",
          marginTop: "50px",
        }}
      >
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
