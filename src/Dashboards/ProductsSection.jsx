import React from "react";

const ProductsSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Top Products</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-3">Product</th>
            <th className="py-3">Sales</th>
            <th className="py-3">Stock</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Crystal Kit", sales: 120, stock: 30 },
            { name: "Energy Candle", sales: 95, stock: 12 },
            { name: "Healing Oil", sales: 150, stock: 25 },
            { name: "Tarot Deck", sales: 110, stock: 8 },
          ].map((product, index) => (
            <tr key={index} className="border-b">
              <td className="py-3">{product.name}</td>
              <td className="py-3">{product.sales}</td>
              <td className="py-3">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsSection;
