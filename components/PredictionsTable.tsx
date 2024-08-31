import React from "react";

export default function PredictionsTable({ predictions }:any) {
  return (
    <div className="mt-8">
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-white dark:bg-neutral-800 border border-black  dark:border-neutral-700 rounded-lg overflow-hidden">
          <thead>
            <tr>
              {Object.keys(predictions).map((drug, index) => (
                <th
                  key={index}
                  className="border-2 border-gray-200 dark:border-neutral-700 py-3 pl-10 bg-gray-50 dark:bg-neutral-700 text-left text-sm font-bold text-gray-800 dark:text-gray-200"
                >
                  {drug}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-200">
              {Object.keys(predictions).map((drug, index) => (
                <td
                  key={index}
                  className="border border-gray-200 dark:border-neutral-700 py-3 px-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  {predictions[drug]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
