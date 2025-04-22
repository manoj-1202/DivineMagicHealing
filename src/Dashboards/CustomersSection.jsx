import React from "react";

const CustomersSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Customers</h2>
      <ul className="space-y-3">
        {["John Doe", "Jane Smith", "Robert Wilson", "Emily Johnson"].map(
          (customer, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-gray-100 rounded-md"
            >
              <span className="font-medium text-gray-700">{customer}</span>
              <button className="text-blue-500 hover:underline">View</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CustomersSection;
