import React, { useState } from "react";
import logo from "./assets/raw.png";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useUser } from "../Usercontext"; // <-- Import User Context

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useUser(); // <-- Access user context

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-md p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} className="logo" alt="Logo" />
          <span className="font-bold text-xl text-leaf-green-dark">CropGuard</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-leaf-green">Home</Link>
          <Link to="/diseases" className="text-gray-600 hover:text-leaf-green">Disease Library</Link>
          <Link to="/about" className="text-gray-600 hover:text-leaf-green">About</Link>
          <Link to="/support" className="text-gray-600 hover:text-leaf-green">Support</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Menu"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>

        {/* Conditional Auth Button (Desktop) */}
        {!user ? (
          <Button
            className="hidden md:inline-block bg-leaf-green hover:bg-leaf-green-dark"
            onClick={() => navigate("/login")}
          >
            Login / Sign Up
          </Button>
        ) : (
          <Button
            className="hidden md:inline-block bg-red-500 hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-white shadow-lg rounded-md border w-48 z-50">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-leaf-green">Home</Link>
            </li>
            <li>
              <Link to="/diseases" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-leaf-green">Disease Library</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-leaf-green">About</Link>
            </li>
            <li>
              <Link to="/support" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-leaf-green">Support</Link>
            </li>
            <li>
              {!user ? (
                <button
                  className="w-full text-left text-gray-700 hover:text-leaf-green"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Login / Sign Up
                </button>
              ) : (
                <button
                  className="w-full text-left text-red-600 hover:text-red-700"
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
