import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./chart.scss";

export default function Chart({ data,title, grid, dataKey }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#800080" />
            <YAxis />
            <Tooltip />
            <Legend />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            <Line type="monotone" dataKey={dataKey} stroke="#800080" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
