import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Upload, X } from "lucide-react";

const ImageUploader = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      onImageUpload(file);

      // Create preview URL for the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className="border-dashed border-2 border-leaf-green/50 bg-white hover:border-leaf-green transition-colors w-full h-full">
      <CardContent className="p-6">
        {previewUrl ? (
          <div className="relative">
            <img
              src={previewUrl}
              alt="Leaf preview"
              className="w-full h-64 object-contain rounded-md"
            />
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center h-64 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="rounded-full bg-leaf-green/10 p-4 mb-4">
              <Plus className="h-8 w-8 text-leaf-green" />
            </div>
            <p className="text-gray-600 mb-2">Upload leaf image for analysis</p>
            <p className="text-xs text-gray-500 text-center">
              Drag & drop your image here or click to browse <br />
              (PNG, JPG, JPEG up to 5MB)
            </p>
            <Button
              className="mt-4 bg-leaf-green hover:bg-leaf-green-dark flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              Upload Image
            </Button>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
        />
      </CardContent>
    </Card>
  );
};

export default ImageUploader;