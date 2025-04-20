import React, { useState, useEffect } from "react";
import { TableRowFeedback } from "../TableRow/TableRow";

function FeedbackTable({ customerList, selectedCustomerId }) {
  const [feedbackData, setFeedbackData] = useState(undefined);
  const [isAddNewFeedback, setIsAddNewFeedback] = useState(false);

  const filterCustomerFeedback = (customerList, customerId) => {
    const customer = customerList.find(
      (customer) => customer.id === customerId
    );
    setFeedbackData(customer.feedbacks);
  };

  useEffect(() => {
    if (selectedCustomerId && customerList) {
      filterCustomerFeedback(customerList, selectedCustomerId);
    }
  }, [selectedCustomerId]);

  return (
    <div className="flex flex-col basis-1/2">
      <div className="flex justify-between items-center border-b pb-2 px-4 py-2">
        <h2 className="text-2xl">Feedback</h2>
        <button
          disabled={feedbackData ? false : true}
          onClick={() => setIsAddNewFeedback(!isAddNewFeedback)}
          className="py-1 px-5 bg-amber-200 rounded font-bold disabled:bg-gray-300"
        >
          Add new
        </button>
      </div>
      <div className="h-full">
        <ul className="flex flex-col">
          {isAddNewFeedback && (
            <input
              type="text"
              className="px-4 border-b py-2"
              placeholder="New Feedback"
            />
          )}
          {feedbackData ? (
            feedbackData.map((feedback) => (
              <TableRowFeedback feedbackText={feedback.feedbackMessage} />
            ))
          ) : (
            <div> Please Select a Customer </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FeedbackTable;
