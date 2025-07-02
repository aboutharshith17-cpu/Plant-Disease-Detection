
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff } from "lucide-react";

const VoiceInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  
  // In a real implementation, this would connect to a speech recognition API
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Simulate recording starting
      setTimeout(() => {
        // Simulate recording completion with a fake transcription
        setIsRecording(false);
        setTranscription("Yellow spots on tomato leaves and some wilting.");
      }, 3000);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-leaf-green-dark">Voice Description</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <Button
            onClick={toggleRecording}
            variant={isRecording ? "destructive" : "outline"}
            className={`rounded-full h-16 w-16 p-3 ${isRecording ? "bg-red-500 hover:bg-red-600" : "border-leaf-green text-leaf-green hover:bg-leaf-green/10"}`}
          >
            {isRecording ? (
              <MicOff className="h-8 w-8" />
            ) : (
              <Mic className="h-8 w-8" />
            )}
          </Button>
          
          <p className="text-sm mt-3 text-gray-600">
            {isRecording ? (
              <span className="flex items-center">
                <span className="animate-pulse-slow text-red-500">●</span>
                <span className="ml-2">Recording... Speak now</span>
              </span>
            ) : (
              "Tap to describe symptoms in your language"
            )}
          </p>
          
          {transcription && (
            <div className="mt-4 p-3 bg-gray-100 rounded-md w-full">
              <p className="text-sm font-medium">Your description:</p>
              <p className="text-gray-700 italic">"{transcription}"</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceInput;
