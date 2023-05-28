import React from "react";

const Tag = ({ bgcolor, text }) => {
  return (
    <div className={`px-1 py-0.5 ${bgcolor}  text-xs text-white rounded-lg`}>
      {text || "etiket"}
    </div>
  );
};

export default Tag;
