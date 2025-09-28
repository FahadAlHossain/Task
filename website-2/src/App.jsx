import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#0058FF] lg:max-w-5xl md:w-[85%] w-[90%] text-center sm:p-10 md:py-15 p-4 flex flex-col gap-5 rounded-3xl">
        <h1 className="lg:text-5xl md:text-[32px] text-2xl font-bold">Get In Touch</h1>
        <p className="lg:text-lg text-sm font-medium">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a domestic plumbing task
          that needs the attention of a trusted professional.
        </p>
        <button className="bg-white text-[#0058FF] font-bold md:text-[16px] text-sm flex items-center justify-center py-[10px] md:px-6 px-5 max-w-fit mx-auto rounded-lg">Book a Professional Plumber <img className="w-6" src="../src/assets/arrow-right.png" alt="" /></button>
      </div>
    </div>
  );
};

export default App;
