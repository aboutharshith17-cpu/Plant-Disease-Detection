import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import environmentalData from "./assets/environmental_disease_dataset_ranges.json";

const getRiskLevelColor = (level) => {
  switch (level) {
    case "Low": return "bg-green-500";
    case "Medium": return "bg-yellow-500";
    case "High": return "bg-orange-500";
    case "Severe": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

const DiseaseResults = ({ envData, prediction }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (prediction) {
      setResult(prediction);
      return;
    }
    // existing environmental data logic...
  }, [envData, prediction]);

  if (!envData && !prediction) {
    return (
      <div className="p-6 text-center text-gray-500 border border-gray-200 rounded-lg">
        Please provide image or environmental data for analysis.
      </div>
    );
  }

  if (!result) {
    return (
      <div className="p-6 text-center text-green-700 border border-green-400 rounded-lg bg-green-50">
        No disease detected — No risk, all is good!
      </div>
    );
  }

  // If backend data has disease and treatment keys, display differently:
  if (result.disease && result.treatment) {
    return (
      <div className="p-6 border border-gray-200 rounded-lg space-y-6">
        <h2 className="text-2xl font-bold text-leaf-green-dark">Disease Prediction Results</h2>
        <h3 className="text-xl font-bold">🦠 Detected Disease: {result.disease}</h3>
        <div>
          <h4 className="font-semibold mt-4">Treatment Suggestions:</h4>
          <p><strong>Organic:</strong> {result.treatment.Organic}</p>
          <p><strong>Inorganic:</strong> {result.treatment.Inorganic}</p>
        </div>
      </div>
    );
  }

  // Otherwise, use your existing display logic for environmental results or other shape
  return (
    <div className="p-6 border border-gray-200 rounded-lg space-y-6">
      <h2 className="text-2xl font-bold text-leaf-green-dark">Disease Prediction Results</h2>
      <h3 className="text-xl font-bold">🦠 Detected Disease: {result.detected}</h3>
      <div className="flex items-center mt-2">
        <span className="text-sm font-medium mr-2">Confidence:</span>
        <Progress value={result.probability} className="h-2 flex-1" />
        <span className="text-sm font-medium ml-2">{result.probability}%</span>
      </div>

      <Badge className={`${getRiskLevelColor(result.riskLevel)} text-white`}>
        {result.riskLevel} Risk
      </Badge>
    </div>
  );
};


export default DiseaseResults;
