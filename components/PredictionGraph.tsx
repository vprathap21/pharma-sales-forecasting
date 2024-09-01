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
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PredictionGraphProps {
  predictions: Record<string, [string, number][]>;
  predictionType: string;
}

export default function PredictionGraph({ predictions, predictionType }: PredictionGraphProps) {
  // Extract labels from the first drug's prediction dates (assuming all drugs share the same dates)
  const labels = predictions[Object.keys(predictions)[0]].map(([date]) => date);

  // Prepare datasets for each drug
  const datasets = Object.keys(predictions).map((drug) => {
    const values = predictions[drug].map(([, value]) => value);

    return {
      label: drug,
      data: values,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      pointRadius: (context: any) => {
        const index = context.dataIndex;
        return index === labels.length - 1 ? 5 : 3; // Larger radius for the last point
      },
      pointBorderColor: (context: any) => {
        const index = context.dataIndex;
        return index === labels.length - 1 ? "red" : "rgba(75, 192, 192, 1)";
      },
      pointBackgroundColor: (context: any) => {
        const index = context.dataIndex;
        return index === labels.length - 1 ? "red" : "rgba(75, 192, 192, 1)";
      },
    };
  });

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to resize more flexibly
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: window.innerWidth < 768 ? 10 : 14, // Adjust font size based on screen width
          },
        },
      },
      title: {
        display: true,
        text: `Sales Predictions (${predictionType.charAt(0).toUpperCase() + predictionType.slice(1)})`,
        font: {
          size: window.innerWidth < 768 ? 14 : 20, // Adjust title size based on screen width
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light grid color for better readability
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 14, // Adjust ticks font size for readability
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light grid color for better readability
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 14, // Adjust ticks font size for readability
          },
        },
      },
    },
    layout: {
      padding: window.innerWidth < 768 ? 10 : 20, // Adjust padding based on screen width
    },
    elements: {
      line: {
        tension: 0.4, // Smoothing of the line
      },
    },
    backgroundColor: "white", // Set the background color of the chart area
  };

  return (
    <div className="p-2 md:p-4 bg-white rounded-lg w-full md:w-1/2 shadow-md">
      <div style={{ height: window.innerWidth < 768 ? "300px" : "400px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
