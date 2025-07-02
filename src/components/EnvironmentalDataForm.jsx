import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Thermometer, Cloud, Leaf } from "lucide-react";

const cropTypes = ["Rice", "Wheat", "Corn", "Potato", "Tomato"];
const growthStages = ["Seedling", "Vegetative", "Flowering", "Fruiting", "Maturity"];
const weatherTypes = [
  { label: "Tropical", value: "A" },
  { label: "Dry", value: "B" },
  { label: "Temperate", value: "C" },
  { label: "Continental", value: "D" },
  { label: "Polar", value: "E" }
];
const oldDiseases = ["Blight", "Rust", "Mildew", "Wilt", "Leaf Spot", "Rot"];

const EnvironmentalDataForm = ({ onDataChange }) => {
  const [data, setData] = useState({
    cropType: "",
    cropStage: "",
    weatherType: "",
    oldDiseases: [],
    temperature: 25,
    humidity: 60
  });

  const handleChange = (field, value) => {
    const updatedData = { ...data, [field]: value };
    setData(updatedData);
    onDataChange(updatedData);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-leaf-green-dark flex items-center gap-2">
          <Leaf className="h-5 w-5" />
          Crop & Environment Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Crop Type</Label>
            <Select onValueChange={(value) => handleChange("cropType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select crop type" />
              </SelectTrigger>
              <SelectContent>
                {cropTypes.map((crop) => (
                  <SelectItem key={crop} value={crop.toLowerCase()}>{crop}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Crop Growth Stage</Label>
            <Select onValueChange={(value) => handleChange("cropStage", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                {growthStages.map((stage) => (
                  <SelectItem key={stage} value={stage.toLowerCase()}>{stage}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label>Weather Type</Label>
          <Select onValueChange={(value) => handleChange("weatherType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select weather type" />
            </SelectTrigger>
            <SelectContent>
              {weatherTypes.map((weather) => (
                <SelectItem key={weather.value} value={weather.value}>{weather.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Previously Occurred Diseases (if any)</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {oldDiseases.map((disease) => (
              <label key={disease} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={disease.toLowerCase()}
                  checked={data.oldDiseases.includes(disease.toLowerCase())}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...data.oldDiseases, e.target.value]
                      : data.oldDiseases.filter(d => d !== e.target.value);
                    handleChange("oldDiseases", updated);
                  }}
                />
                {disease}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Temperature (°C): {data.temperature}</Label>
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-leaf-green" />
              <Slider
                min={0}
                max={50}
                step={1}
                value={[data.temperature]}
                onValueChange={(vals) => handleChange("temperature", vals[0])}
              />
            </div>
          </div>
          <div>
            <Label>Humidity (%): {data.humidity}</Label>
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-leaf-green" />
              <Slider
                min={0}
                max={100}
                step={1}
                value={[data.humidity]}
                onValueChange={(vals) => handleChange("humidity", vals[0])}
              />
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default EnvironmentalDataForm;
