import React, { useEffect, useRef, useState } from "react";

function NewEntryInput({ placeholder, onCancel }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleKeydownEvent = (e) => {
    if (e.key === "Enter" && inputValue) {
      console.log("added new input: " + inputValue);
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  // when the component mounts, Focus on it
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <input
      type="text"
      className="px-4 border-b py-2"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeydownEvent}
      ref={inputRef}
    />
  );
}

export default NewEntryInput;
