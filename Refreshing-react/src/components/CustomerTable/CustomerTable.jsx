import React, { useState } from "react";
import { TableRowCustomer } from "../TableRow/TableRow";
import NewEntryInput from "../NewEntryInput/NewEntryInput";
import { addNewCustomer } from "../../dumb_data";

function CustomerTable({ customers, onSelectCustomer, selectedCustomerId }) {
  const [isAddNewCustomer, setIsAddNewCustomer] = useState(false);

  const handleCancel = () => {
    setIsAddNewCustomer(false);
  };

  const handleAdding = (customerName) => {
    addNewCustomer(customerName);
  };

  const handleButtonToggle = () => {
    setIsAddNewCustomer(!isAddNewCustomer);
  };

  return (
    <div className="flex flex-col basis-1/2">
      <div className="flex justify-between items-center border-b pb-2 px-4 py-2">
        <h2 className="text-2xl">Customers</h2>
        <button
          onClick={handleButtonToggle}
          className="py-1 px-5 bg-amber-200 rounded font-bold "
        >
          Add new
        </button>
      </div>
      <div className="border-r h-full">
        <ul className="flex flex-col">
          {isAddNewCustomer && (
            <NewEntryInput
              placeholder="New Customer"
              onCancel={handleCancel}
              onAdd={handleAdding}
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
