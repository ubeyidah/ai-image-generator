import React from "react";

const GeneratedImage = ({ URL }) => {
  return (
    <div className="mt-10 flex justify-center">
      <img src={URL} alt="" className="flex-1 max-w-md px-3" />
    </div>
  );
};

export default GeneratedImage;
