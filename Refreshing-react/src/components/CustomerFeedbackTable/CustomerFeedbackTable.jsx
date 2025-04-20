import React, { useEffect, useState } from "react";
import CustomerTable from "../CustomerTable/CustomerTable";
import FeedbackTable from "../FeedbackTable/FeedbackTable";

function CustomerFeedbackTable({ data }) {
  const [selectedCustomerId, setSelectedCustomerId] = useState(0);
  const customers = data;

  return (
    <main className="min-h-screen flex justify-center items-center">
      {/* main layout card */}
      <div className="border w-4/5">
        {/* Header */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">Customer Feedback</h1>
        </div>
        <div className="flex ">
          <CustomerTable
            customers={customers}
            selectedCustomerId={selectedCustomerId}
            onSelectCustomer={setSelectedCustomerId}
          />
          <FeedbackTable
            selectedCustomerId={selectedCustomerId}
            customerList={data}
          />
        </div>
      </div>
    </main>
  );
}

export default CustomerFeedbackTable;
