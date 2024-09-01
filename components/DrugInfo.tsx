import React from "react";

interface DrugInfoProps {
  drugCode: string;
  name: string;
  description: string;
  usage: string;
  additionalInfo?: string;
}

const DrugInfo: React.FC<DrugInfoProps> = ({ drugCode, name, description, usage, additionalInfo }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{name} ({drugCode})</h2>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {description}</p>
      <p className="text-gray-700 mb-2"><strong>Usage:</strong> {usage}</p>
      {additionalInfo && <p className="text-gray-700"><strong>Additional Info:</strong> {additionalInfo}</p>}
    </div>
  );
};

export default DrugInfo;
