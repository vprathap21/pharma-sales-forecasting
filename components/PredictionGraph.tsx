import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PredictionGraphProps {
  predictions: Record<string, number>;
  predictionType: string;
}

export default function PredictionGraph({ predictions, predictionType }: PredictionGraphProps) {
  const labels = Object.keys(predictions);
  const values = Object.values(predictions);

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Predictions for ${predictionType.charAt(0).toUpperCase() + predictionType.slice(1)} Sales`,
        data: values,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Sales Predictions (${predictionType.charAt(0).toUpperCase() + predictionType.slice(1)})`,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",  // Light grid color for better readability
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",  // Light grid color for better readability
        },
      },
    },
    layout: {
      padding: 20,
    },
    elements: {
      line: {
        tension: 0.4, // Smoothing of the line
      },
    },
    backgroundColor: "white", // Set the background color of the chart area
  };

  return (
    <div className="p-4 bg-white rounded-lg w-1/2 shadow-md">
      <Line data={data} options={options} />
    </div>
  );
}
