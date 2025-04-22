import React, { useEffect, useRef, useState } from "react";

function NewEntryInput({ placeholder, onCancel, onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleKeydownEvent = (e) => {
    if (e.key === "Enter" && inputValue) {
      onAdd(inputValue);
      onCancel();
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      onCancel();
    }
  };

  // when the component mounts, Focus on it
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
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
