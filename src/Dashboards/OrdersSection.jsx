import React from "react";

const OrdersSection = () => {
  const orders = [
    {
      product: "Reiki Healing Crystal",
      trackingId: "18908420",
      date: "21 April 2025",
      status: "Approved",
    },
    {
      product: "Aura Cleansing Spray",
      trackingId: "18908421",
      date: "21 April 2025",
      status: "Pending",
    },
    {
      product: "Chakra Balancing Bracelet",
      trackingId: "18908422",
      date: "21 April 2025",
      status: "Delivered",
    },
    {
      product: "Bach Flower Remedies",
      trackingId: "18908423",
      date: "21 April 2025",
      status: "Approved",
    },
  ];

  const statusStyles = {
    Approved: "bg-green-500",
    Pending: "bg-red-400",
    Delivered: "bg-blue-400",
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-3">Product</th>
            <th className="py-3">Tracking ID</th>
            <th className="py-3">Date</th>
            <th className="py-3">Status</th>
            <th className="py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="border-b">
              <td className="py-4">{order.product}</td>
              <td className="py-4">{order.trackingId}</td>
              <td className="py-4">{order.date}</td>
              <td className="py-4">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs ${
                    statusStyles[order.status] || "bg-gray-400"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="text-blue-500 cursor-pointer py-4">Details</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersSection;
