import React from "react";

interface buttonProps {
  text: string;
}

const PrimaryBtn = (props: buttonProps) => {
  const { text } = props;
  return (
    <div>
      <button
        className="text-white text-sm p-2 m-1 rounded-sm font-semibold"
        style={{ backgroundColor: "#1D4ED8" }}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryBtn;
