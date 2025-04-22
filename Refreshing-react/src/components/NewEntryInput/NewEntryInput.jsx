import React, { useRef, useState } from "react";

function NewEntryInput({ placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  return (
    <input
      type="text"
      className="px-4 border-b py-2"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      ref={inputRef}
    />
  );
}

export default NewEntryInput;
