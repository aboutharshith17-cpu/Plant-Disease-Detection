import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUser } from "../Usercontext";  

const sampleDiseases = [
  {
    name: "Powdery Mildew",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Downy_and_Powdery_mildew_on_grape_leaf.JPG",
    description: "White powdery fungal growth on leaves and stems. Common in cucurbits, grapes, and tomatoes.",
  },
  {
    name: "Leaf Spot",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/%27Cercospora_capsici.jpg/640px-%27Cercospora_capsici.jpg",
    description: "Spots on leaves caused by fungi or bacteria, reducing photosynthesis and weakening the plant.",
  },
  {
    name: "Blight",
    image: "https://cdn.britannica.com/89/126689-004-D622CD2F/Potato-leaf-blight.jpg",
    description: "Caused by fungi, leads to rotting of leaves and fruit, especially in potatoes and tomatoes.",
  },
  {
    name: "Rust",
    image: "https://cdn.britannica.com/06/128606-050-34D3D9C8/Soybean-rust.jpg",
    description: "Orange-brown pustules on leaves. Common in wheat and other cereal crops. Caused by fungi.",
  },
  {
    name: "Downy Mildew",
    image: "https://www.planetnatural.com/wp-content/uploads/2012/12/downy-mildew-disease-920x518.jpg",
    description: "Yellow spots on upper leaf surfaces and downy fungal growth underneath. Favors humid conditions.",
  },
  {
    name: "Anthracnose",
    image: "https://www.planetnatural.com/wp-content/uploads/2012/12/anthracnose-1.jpg",
    description: "Dark, sunken lesions on stems, leaves, and fruit. Affects beans, cucumbers, and melons.",
  },
  {
    name: "Fusarium Wilt",
    image: "https://vegetableswest.com/wp-content/uploads/sites/8/2021/05/1-80-850x491.png",
    description: "Fungal disease that causes wilting and yellowing of leaves, commonly affecting tomatoes and bananas.",
  },
  {
    name: "Bacterial Canker",
    image: "https://cdn.mos.cms.futurecdn.net/REhqab56mD8D3fLGSxBSYe-1200-80.jpg",
    description: "Causes lesions on leaves, stems, and fruit. Common in tomatoes. Spread through infected seeds.",
  },
  {
    name: "Smut",
    image: "https://www.lovethegarden.com/sites/default/files/styles/og_image/public/content/articles/UK_advice-pests-diseases-smuts_main.jpg?itok=3_ePNP7W",
    description: "Tumor-like galls on maize ears, kernels, and stalks. Caused by the fungus Ustilago maydis.",
  },
  {
    name: "Clubroot",
    image: "https://goldcrop.ie/wp-content/uploads/2023/01/Clubroot-Disease-of-Brassica-Crops.webp",
    description: "Causes swollen, club-like roots and stunted growth in cruciferous vegetables like cabbage.",
  },{
  name: "Early Blight",
  image: "https://envirevoagritech.com/wp-content/uploads/2024/07/potato-blight.jpg",
  description: "Dark concentric spots on older leaves, progressing upward. Affects tomatoes and potatoes.",
  },
  {
  name: "Black Rot",
  image: "https://cdn.mos.cms.futurecdn.net/PGFS4mSeAcKRKrkRZ4Wsr9.jpg",
  description: "Fungal disease causing black lesions on leaves, stems, and fruit. Common in grapes and crucifers.",
  }
];


const DiseaseLibrary = () => {
  const { user } = useUser(); 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Disease Library</h1>

        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleDiseases.map((disease, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 border hover:shadow-xl transition"
              >
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h2 className="text-lg font-bold">{disease.name}</h2>
                <p className="text-sm text-gray-600">{disease.description}</p>
              </div>
            ))}
          </div>
      </main>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DiseaseLibrary;
