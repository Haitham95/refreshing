import React from "react";

export function TableRowCustomer({
  customerName,
  customerId,
  onSelectCustomer,
  selectedCustomerId,
}) {
  return (
    <li
      className={`px-4 border-b py-2 cursor-pointer ${
        selectedCustomerId === customerId ? "font-bold bg-blue-200" : ""
      }`}
      onClick={(e) => onSelectCustomer(customerId)}
    >
      {customerName}
    </li>
  );
}

export function TableRowFeedback({ feedbackText }) {
  return <li className="px-4 border-b py-2 ">{feedbackText}</li>;
}
