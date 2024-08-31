"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PredictionsTable from "./PredictionsTable";
import PredictionGraph from "./PredictionGraph"; // Import the graph component

export default function ForecastingSection() {
  const [date, setDate] = useState("");
  const [predictionType, setPredictionType] = useState("monthly");
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDateChange = (e:any) => {
    setDate(e.target.value);
  };

  const handlePredictionTypeChange = (e:any) => {
    setPredictionType(e.target.value);
  };

  const fetchPredictions = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/forecast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          type: predictionType,
        }),
      });

      const data = await response.json();
      setPredictions(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching predictions:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-neutral-900 rounded-lg shadow-lg w-full">
      {/* <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Forecasting Section
      </h1> */}

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-white mb-2">Select Date:</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="p-3 rounded-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-white mb-2">Prediction Type:</label>
          <select
            value={predictionType}
            onChange={handlePredictionTypeChange}
            className="p-3 rounded-lg bg-gray-200 dark:bg-neutral-700 text-black dark:text-white"
          >
            <option value="weekly">Weekly Sales</option>
            <option value="monthly">Monthly Sales</option>
            <option value="daily">Daily Sales</option>
          </select>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={fetchPredictions}
        className="mt-6 w-full p-4 bg-blue-600 dark:bg-emerald-500 text-white font-semibold rounded-lg shadow-md"
      >
        {loading ? "Fetching..." : "Get Predictions"}
      </motion.button>

      {predictions && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Predictions:</h2>
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
            <PredictionsTable predictions={predictions} />
          </div>

          {/* Add the interactive graph */}
          <div className="mt-8 w-full">
            <PredictionGraph predictions={predictions} predictionType={predictionType} />
          </div>
        </div>
      )}
    </div>
  );
}
