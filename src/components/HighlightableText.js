import React from "react";

const HighlightableText = ({ text, highlight }) => {
  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <div className="mt-4">
      {highlight.length > 0
        ? parts.map((part, i) => (
            <span
              key={i}
              className={
                part.toLowerCase() === highlight.toLowerCase()
                  ? "highlight"
                  : ""
              }
            >
              {part}
            </span>
          ))
        : text}
    </div>
  );
};

export default HighlightableText;
