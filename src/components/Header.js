import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between">
        <div class="flex gap-4 items-center">
          <img
            src={require("../assets/image.png")}
            alt="Logo"
            class="w-16 h-16"
          />
          <h1 className="text-2xl font-bold text-green-900">Plant Proyect</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
