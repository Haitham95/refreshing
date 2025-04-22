import React, { useEffect, useState } from "react";
import CustomerTable from "../CustomerTable/CustomerTable";
import FeedbackTable from "../FeedbackTable/FeedbackTable";
import { DATA } from "../../dumb_data";

function CustomerFeedbackTable() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(0);
  const customers = DATA;

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
            customerList={customers}
          />
        </div>
      </div>
    </main>
  );
}

export default CustomerFeedbackTable;
