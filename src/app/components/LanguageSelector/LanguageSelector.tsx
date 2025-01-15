"use client";

import React from "react";

const LanguageSelector = () => {
  const handleLanguageChange = (lang: string) => {
    console.log("Switch language to:", lang); // Tích hợp i18n ở đây
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => handleLanguageChange("en")} 
        style={{ color: "orange", fontWeight: "bold", fontSize: "16px", border: "none", background: "none", cursor: "pointer" }}
      >
        EN
      </button>
      <button 
        onClick={() => handleLanguageChange("ko")} 
        style={{ color: "black", fontWeight: "bold", fontSize: "16px", border: "none", background: "none", cursor: "pointer" }}
      >
        KR
      </button>
    </div>
  );
};

export default LanguageSelector;
