import React, { useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import GeneratedImage from "./GeneratedImage";

const ImageGenerator = () => {
  const [text, setText] = useState("");

  async function generate() {
    if (!text) {
      return 0;
    }
  }
  return (
    <section className="flex-1 max-w-2xl px-3">
      <h1 className="text-white text-3xl font-semibold font-mono text-center">
        MY <span className="text-pink-500">AI </span> IMAGE
        <span className="text-cyan-800"> GENERATOR</span>
      </h1>

      <div className="w-full px-2 py-1  border border-cyan-500 mt-6 shadow-md flex items-center  rounded-full  justify-between">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="describe your idea"
          className="flex-1 bg-transparent h-full text-sm py-3 outline-none text-white pl-4 pr-2"
        />
        <button
          onClick={generate}
          className="flex bg-cyan-600 items-center gap-3 text-white py-2 rounded-full px-6"
        >
          Generate
          <RiAiGenerate />
        </button>
      </div>

      <GeneratedImage URL="https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </section>
  );
};

export default ImageGenerator;
