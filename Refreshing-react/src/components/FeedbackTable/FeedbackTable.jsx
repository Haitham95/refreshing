import React, { useState, useEffect } from "react";
import { TableRowFeedback } from "../TableRow/TableRow";
import NewEntryInput from "../NewEntryInput/NewEntryInput";
import { addNewFeedback } from "../../dumb_data";

function FeedbackTable({ customerList, selectedCustomerId }) {
  const [feedbackData, setFeedbackData] = useState(undefined);
  const [isAddNewFeedback, setIsAddNewFeedback] = useState(false);

  const filterCustomerFeedback = (customerList, customerId) => {
    const customer = customerList.find(
      (customer) => customer.id === customerId
    );
    setFeedbackData(customer.feedbacks);
  };

  const handleCancel = () => {
    setIsAddNewFeedback(false);
  };

  const handleAdding = (feedbackText) => {
    addNewFeedback(selectedCustomerId, feedbackText);
  };

  const handleButtonToggle = () => {
    setIsAddNewFeedback(!isAddNewFeedback);
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
          onClick={handleButtonToggle}
          className="py-1 px-5 bg-amber-200 rounded font-bold disabled:bg-gray-300"
        >
          Add new
        </button>
      </div>
      <div className="h-full">
        <ul className="flex flex-col">
          {isAddNewFeedback && (
            <NewEntryInput
              placeholder="New Feedback"
              onCancel={handleCancel}
              onAdd={handleAdding}
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
