import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SupportPage = () => {
  return (
    <>
      <Navbar />
       <main className="flex-grow p-6 max-w-3xl mx-auto">
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-leaf-green mb-4">Support</h1>
        <p className="text-gray-700 text-lg">
          Need help using CropGuard? We're here for you.
        </p>
        <ul className="mt-4 text-gray-700 text-lg list-disc list-inside space-y-2">
          <li>Email us at <a href="mailto:support@cropguard.io" className="text-leaf-green hover:underline">support@cropguard.io</a></li>
          <li>Check our FAQs and guides (coming soon)</li>
          <li>Join our community forum to ask questions and share ideas</li>
        </ul>
        <p className="mt-4 text-gray-700 text-lg">
          We aim to respond to all queries within 24–48 hours. Thank you for helping us grow smarter agriculture!
        </p>
      </div>
      </main>
       <div className="fixed bottom-0 left-0 w-full">
      <Footer />
      </div>
    </>
  );
};

export default SupportPage;
