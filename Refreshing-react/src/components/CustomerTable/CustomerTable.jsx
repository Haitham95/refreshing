import React, { useState } from "react";
import { TableRowCustomer } from "../TableRow/TableRow";

function CustomerTable({ customers, onSelectCustomer, selectedCustomerId }) {
  const [isAddNewCustomer, setIsAddNewCustomer] = useState(false);

  return (
    <div className="flex flex-col basis-1/2">
      <div className="flex justify-between items-center border-b pb-2 px-4 py-2">
        <h2 className="text-2xl">Customers</h2>
        <button
          onClick={() => setIsAddNewCustomer(!isAddNewCustomer)}
          className="py-1 px-5 bg-amber-200 rounded font-bold "
        >
          Add new
        </button>
      </div>
      <div className="border-r h-full">
        <ul className="flex flex-col">
          {isAddNewCustomer && (
            <input
              type="text"
              className="px-4 border-b py-2"
              placeholder="New Customer"
            />
          )}
          {customers.map((customer) => (
            <TableRowCustomer
              selectedCustomerId={selectedCustomerId}
              customerName={customer.customerName}
              customerId={customer.id}
              onSelectCustomer={onSelectCustomer}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomerTable;
