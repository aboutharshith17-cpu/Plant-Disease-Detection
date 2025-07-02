import { useState } from "react";
import { Button } from "@/components/ui/button";
import ImageUploader from "./ImageUploader";
import EnvironmentalDataForm from "./EnvironmentalDataForm";
import DiseaseResults from "./DiseaseResults";
import { Leaf, ThermometerSun } from "lucide-react";
import { toast } from "sonner";

const DiseaseDetectionForm = () => {
  const [leafImage, setLeafImage] = useState(null);
  const [envData, setEnvData] = useState(null);
  const [imageResult, setImageResult] = useState(null);

  const [isImageAnalyzing, setIsImageAnalyzing] = useState(false);
  const [isEnvAnalyzing, setIsEnvAnalyzing] = useState(false);

  const [showImageResults, setShowImageResults] = useState(false);
  const [showEnvResults, setShowEnvResults] = useState(false);

  const handleImageUpload = (file) => {
    setLeafImage(file);
    setShowImageResults(false);
    setImageResult(null);
  };

  const handleDataChange = (data) => {
    setEnvData(data);
    setShowEnvResults(false);
  };

  const handleImageAnalyze = async () => {
    if (!leafImage) {
      toast.error("Please upload a leaf image for analysis");
      return;
    }

    setIsImageAnalyzing(true);

    const formData = new FormData();
    formData.append("file", leafImage);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      console.log(data);
      setImageResult(data);
      setShowImageResults(true);
      toast.success("Leaf image analysis complete!");
    } catch (err) {
      console.error("Image analysis failed:", err);
      toast.error("Image analysis failed. Try again.");
    } finally {
      setIsImageAnalyzing(false);
    }
  };

  const handleEnvAnalyze = () => {
    if (!envData?.cropType) {
      toast.error("Please select a crop type");
      return;
    }

    setIsEnvAnalyzing(true);
    setTimeout(() => {
      setIsEnvAnalyzing(false);
      setShowEnvResults(true);
      toast.success("Environmental analysis complete!");
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-full flex">
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>
        <div className="h-full flex">
          <EnvironmentalDataForm onDataChange={handleDataChange} />
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
        <Button
          className="bg-leaf-green hover:bg-leaf-green-dark px-6 py-4 text-md"
          onClick={handleImageAnalyze}
          disabled={isImageAnalyzing}
        >
          {isImageAnalyzing ? (
            <>
              <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
              Analyzing Image...
            </>
          ) : (
            <>
              <Leaf className="mr-2 h-5 w-5" />
              Analyze Leaf Image
            </>
          )}
        </Button>

        <Button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-4 text-md"
          onClick={handleEnvAnalyze}
          disabled={isEnvAnalyzing}
        >
          {isEnvAnalyzing ? (
            <>
              <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
              Analyzing Environment...
            </>
          ) : (
            <>
              <ThermometerSun className="mr-2 h-5 w-5" />
              Analyze Environment
            </>
          )}
        </Button>
      </div>

      <div className="mt-12 space-y-10">
        {showImageResults && imageResult && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Leaf Image Results</h2>
            <DiseaseResults prediction={imageResult} />
          </div>
        )}
        {showEnvResults && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Environmental Condition Results</h2>
            <DiseaseResults envData={envData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseDetectionForm;
