import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiseaseDetectionForm from "@/components/DiseaseDetectionForm";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { LoginButton } from "@/components/ui/button";
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar /><main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-leaf-green to-leaf-green-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Crops with Early Disease Detection
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Identify plant diseases instantly with our advanced detection system. 
              Upload a photo or describe symptoms to get immediate treatment recommendations.
            </p>
            <Button 
              className="bg-white text-leaf-green-dark hover:bg-gray-100 px-8 py-6 text-lg"
              onClick={() => {
                document.getElementById("disease-detection")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Leaf className="mr-2 h-5 w-5" />
              Detect Disease Now
            </Button>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-leaf-green-dark">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-leaf-green font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Photo</h3>
                <p className="text-gray-600">
                  Take a clear photo of the affected plant leaves or use voice description to explain symptoms.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-leaf-green font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Add Environmental Data</h3>
                <p className="text-gray-600">
                  Provide information about temperature, humidity and crop type for more accurate analysis.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-leaf-green font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Results</h3>
                <p className="text-gray-600">
                  Receive instant disease identification with treatment recommendations and risk assessment.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Disease Detection Form Section */}
        <section id="disease-detection" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-leaf-green-dark">
              Disease Detection
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Upload a photo of your crop's affected area and provide environmental conditions to receive a detailed analysis and treatment recommendations.
            </p>
            
            <DiseaseDetectionForm />
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-leaf-green-dark">
      Why Choose CropGuard
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-leaf-green font-bold">⚡</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">Fast Results</h3>
        <p className="text-gray-600">
          Get disease identification and treatment recommendations within seconds.
        </p>
      </div>

      <div className="text-center p-6">
        <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-leaf-green font-bold">🔍</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">High Accuracy</h3>
        <p className="text-gray-600">
          Our system provides reliable disease detection with detailed analysis.
        </p>
      </div>

      <div className="text-center p-6">
        <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-leaf-green font-bold">🌐</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">Works Offline</h3>
        <p className="text-gray-600">
          Basic functionality available even with limited internet connectivity.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Index;