import { FaSmileWink } from "react-icons/fa";

export default function Inventory({ activeSection }:any) {
  return (
    <div className="flex flex-1 overflow-y-auto">
      <div className="p-4 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-4 flex-1 w-full">
        {activeSection === "dashboard" && (
          <div className="flex gap-4">
            {[...new Array(4)].map((_, i) => (
              <div
                key={"first-array" + i}
                className="h-24 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
        )}

        {activeSection === "insights" && (
          <div className="h-auto antialiased">
            {/* Insights section content */}
          </div>
        )}

        {activeSection === "forecasting" && (
          <div>
            {/* Forecasting section content */}
          </div>
        )}

        {activeSection === "inventory" && (
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Inventory Management
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
              This feature will come in version 2.0, <br />
              wait for it{" "}
              <FaSmileWink className="inline-block text-yellow-500 text-2xl ml-2" />
            </p>
          </div>
        )}

        {activeSection === "logout" && (
          <div>
            {/* Logout section content */}
          </div>
        )}
      </div>
    </div>
  );
}
