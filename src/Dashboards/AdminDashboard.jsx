import React, { useState } from "react";

import {
  Package,
  Users,
  ClipboardList,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      section: "dashboard",
    },
    { name: "Orders", icon: <Package size={20} />, section: "orders" },
    { name: "Customers", icon: <Users size={20} />, section: "customers" },
    {
      name: "Products",
      icon: <ClipboardList size={20} />,
      section: "products",
    },
  ];

  return (
    <div className="w-full bg-gray-100 font-title flex">
      {/* Sidebar for large screens */}
      <aside className="w-64 h-auto bg-gray-300 p-6 hidden sm:block">
        <h1 className="text-3xl font-bold mb-8">Admin</h1>
        <nav className="space-y-4 text-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to=""
              onClick={() => setActiveSection(item.section)}
              className={`flex items-center gap-2 px-2 py-2 rounded-md hover:bg-purple-500 ${
                activeSection === item.section
                  ? "bg-purple-500 font-semibold"
                  : ""
              }`}
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
          <button className="flex items-center gap-2 text-red-600 mt-10 hover:text-red-800">
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </aside>

      {/* Sidebar for mobile */}
      <div className="sm:hidden">
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Content */}
            <div className="relative z-50 w-64 bg-gray-300 h-full p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Admin</h1>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-4 text-lg">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to=""
                    onClick={() => {
                      setActiveSection(item.section);
                      setIsSidebarOpen(false);
                    }}
                    className={`flex items-center gap-2 px-2 py-2 rounded-md hover:bg-purple-500 ${
                      activeSection === item.section
                        ? "bg-purple-500 font-semibold"
                        : ""
                    }`}
                  >
                    {item.icon} {item.name}
                  </NavLink>
                ))}
                <button className="flex items-center gap-2 text-red-600 mt-10 hover:text-red-800">
                  <LogOut size={20} /> Logout
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto w-full">
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center justify-between mb-4">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={28} />
          </button>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>

        {/* Dashboard section */}

        {activeSection === "dashboard" && (
          <>
            <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-6">
              Dashboard
            </h1>
            <div className="text-center mb-6">
              <div className="bg-purple-400 text-white p-8 rounded-xl shadow-lg flex items-center justify-between gap-6">
                <p className="text-2xl font-bold">Total Sales:</p>
                <p className="text-xl">Sales</p>
                <p className="text-2xl font-bold">6000</p>
                <p className="text-sm">(Last 24 Hours)</p>
              </div>
            </div>

            {/* recently orders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-md">
                <h2 className="font-semibold mb-4 text-lg">Recent Orders</h2>
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
                    {[
                      "Reiki Healing Crystal",
                      "Aura Cleansing Spray",
                      "Chakra Balancing Bracelet",
                      "Bach Flower Remedies",
                    ].map((product, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-4">{product}</td>
                        <td className="py-4">1890842{i}</td>
                        <td className="py-4">21 April 2025</td>
                        <td className="py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-white text-xs ${
                              i % 3 === 0
                                ? "bg-green-500"
                                : i % 3 === 1
                                ? "bg-red-400"
                                : "bg-blue-400"
                            }`}
                          >
                            {i % 3 === 0
                              ? "Approved"
                              : i % 3 === 1
                              ? "Pending"
                              : "Delivered"}
                          </span>
                        </td>
                        <td className="text-blue-500 cursor-pointer py-4">
                          Details
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
        {/* Order section */}
        {activeSection === "orders" && (
          <>
            <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-6">
              Orders
            </h1>
            <div className="text-center mb-6">
              <div className="bg-purple-400 text-white p-8 rounded-xl shadow-lg flex items-center justify-between gap-6">
                <p className="text-2xl font-bold">Total Orders:</p>
                <p className="text-xl">Orders</p>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm">(Last 24 Hours)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-md">
                <h2 className="font-semibold mb-4 text-lg">Recent Orders</h2>
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
                    {[
                      "Reiki Healing Crystal",
                      "Aura Cleansing Spray",
                      "Chakra Balancing Bracelet",
                      "Bach Flower Remedies",
                    ].map((product, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-4">{product}</td>
                        <td className="py-4">1890842{i}</td>
                        <td className="py-4">21 April 2025</td>
                        <td className="py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-white text-xs ${
                              i % 3 === 0
                                ? "bg-green-500"
                                : i % 3 === 1
                                ? "bg-red-400"
                                : "bg-blue-400"
                            }`}
                          >
                            {i % 3 === 0
                              ? "Approved"
                              : i % 3 === 1
                              ? "Pending"
                              : "Delivered"}
                          </span>
                        </td>
                        <td className="text-blue-500 cursor-pointer py-4">
                          Details
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
        {/* Customer section */}

        {activeSection === "customers" && (
          <>
            <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-6">
              Customers
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-md">
                <h2 className="font-semibold mb-4 text-lg">Recent Customers</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-3">Name</th>
                      <th className="py-3">Email</th>
                      <th className="py-3">Joined Date</th>
                      <th className="py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Priya Sharma",
                        email: "priya@example.com",
                        status: "Active",
                      },
                      {
                        name: "Ravi Kumar",
                        email: "ravi@example.com",
                        status: "Inactive",
                      },
                      {
                        name: "Anita Joshi",
                        email: "anita@example.com",
                        status: "Active",
                      },
                      {
                        name: "Arun Mehta",
                        email: "arun@example.com",
                        status: "Pending",
                      },
                    ].map((customer, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-4">{customer.name}</td>
                        <td className="py-4">{customer.email}</td>
                        <td className="py-4">20 April 2025</td>
                        <td className="py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-white text-xs ${
                              customer.status === "Active"
                                ? "bg-green-500"
                                : customer.status === "Inactive"
                                ? "bg-gray-500"
                                : "bg-yellow-500"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Product section */}
        {activeSection === "products" && (
          <>
            <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-6">
              Products
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-md">
                <h2 className="font-semibold mb-4 text-lg">Product List</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-3">Product</th>
                      <th className="py-3">Category</th>
                      <th className="py-3">Stock</th>
                      <th className="py-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Reiki Crystal",
                        category: "Healing",
                        stock: 12,
                        price: 599,
                      },
                      {
                        name: "Aura Spray",
                        category: "Spiritual",
                        stock: 8,
                        price: 349,
                      },
                      {
                        name: "Chakra Bracelet",
                        category: "Jewelry",
                        stock: 15,
                        price: 449,
                      },
                      {
                        name: "Energy Oil",
                        category: "Essential",
                        stock: 5,
                        price: 799,
                      },
                    ].map((product, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-4">{product.name}</td>
                        <td className="py-4">{product.category}</td>
                        <td className="py-4">{product.stock}</td>
                        <td className="py-4">₹{product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;

// import React, { useState } from "react";
// import { ShoppingBag, Users, PackageSearch, LogOut } from "lucide-react";
// import OrdersSection from "./OrdersSection";
// import CustomersSection from "./CustomersSection";
// import ProductsSection from "./ProductsSection";

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState("orders");

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
//           {/* Sidebar */}
//           <div className="bg-white p-4 rounded-xl shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
//             <ul className="space-y-2">
//               <li>
//                 <button
//                   onClick={() => setActiveSection("orders")}
//                   className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
//                     activeSection === "orders" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//                   }`}
//                 >
//                   <ShoppingBag className="mr-2" size={18} /> Orders
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => setActiveSection("customers")}
//                   className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
//                     activeSection === "customers" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//                   }`}
//                 >
//                   <Users className="mr-2" size={18} /> Customers
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => setActiveSection("products")}
//                   className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
//                     activeSection === "products" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//                   }`}
//                 >
//                   <PackageSearch className="mr-2" size={18} /> Products
//                 </button>
//               </li>
//               <li>
//                 <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-200">
//                   <LogOut className="mr-2" size={18} /> Logout
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {activeSection === "orders" && <OrdersSection />}
//             {activeSection === "customers" && <CustomersSection />}
//             {activeSection === "products" && <ProductsSection />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
