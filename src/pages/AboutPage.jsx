import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-leaf-green mb-4">About CropGuard</h1>
        <p className="text-gray-700 text-lg">
          CropGuard is a smart solution designed to help farmers identify and manage crop diseases efficiently.
          Our mission is to empower agriculture with cutting-edge technology that ensures healthy crops,
          higher yields, and reduced losses.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          We combine image analysis, disease databases, and real-time alerts to give farmers and agriculture
          professionals the tools they need to protect their fields. Built with passion for sustainability,
          CropGuard contributes to food security and rural development.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
