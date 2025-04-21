import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Package,
  Users,
  ClipboardList,
  BarChart2,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const data = [
  { name: "01:00", value: 200 },
  { name: "02:00", value: 400 },
  { name: "03:00", value: 300 },
  { name: "04:00", value: 500 },
  { name: "05:00", value: 450 },
  { name: "06:00", value: 600 },
];

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
    { name: "Analytics", icon: <BarChart2 size={20} />, section: "analytics" },
  ];

  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return (
      <div className="py-10 flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Admin Login
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-6">
            © 2025 Admin Dashboard. All rights reserved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 font-title flex">
      {/* Sidebar for large screens */}
      <aside className="w-64 min-h-screen bg-gray-300 p-6 hidden sm:block">
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
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 mt-10 hover:text-red-800"
          >
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
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 mt-10 hover:text-red-800"
                >
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

        {activeSection === "dashboard" && (
          <>
            <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-6">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-purple-400 text-white p-4 rounded-xl shadow-lg">
                <p className="text-xl">Sales</p>
                <p className="text-2xl font-bold">6000</p>
                <p className="text-sm">Last 24 Hours</p>
              </div>
              <div className="bg-pink-400 text-white p-4 rounded-xl shadow-lg">
                <p className="text-xl">Revenue</p>
                <p className="text-2xl font-bold">9270</p>
                <p className="text-sm">Last 24 Hours</p>
              </div>
              <div className="bg-yellow-400 text-white p-4 rounded-xl shadow-lg">
                <p className="text-xl">Expenses</p>
                <p className="text-2xl font-bold">4,270</p>
                <p className="text-sm">Last 24 Hours</p>
              </div>
            </div>

{/* recently orders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-md">
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

{/* Customer Updates */}
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h2 className="font-semibold text-lg mb-4">Updates</h2>
                <ul className="space-y-4">
                  {[
                    [
                      "Manoj",
                      " has ordered Reiki Healing Crystal",
                      "1 min ago",
                    ],
                    [
                      "Ashwin",
                      " has ordered Chakra Balancing Bracelet.",
                      "30 mins ago",
                    ],
                    [
                      "Raghul",
                      "has ordered Aura Cleansing Spray",
                      "1 hour ago",
                    ],
                  ].map(([name, msg, time], idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-10 h-10 bg-gray-300 rounded-full" />
                      <div>
                        <p className="text-sm">
                          <strong>{name}</strong> {msg}
                        </p>
                        <p className="text-xs text-gray-400">{time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md col-span-full lg:col-span-1">
                <h2 className="font-semibold text-lg mb-4">Customer Review</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f472b6"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}

        {activeSection === "orders" && (
          <div className="text-2xl">📦 Orders Section</div>
        )}
        {activeSection === "customers" && (
          <div className="text-2xl">👥 Customers Section</div>
        )}
        {activeSection === "products" && (
          <div className="text-2xl">📋 Products Section</div>
        )}
        {activeSection === "analytics" && (
          <div className="text-2xl">📊 Analytics Section</div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
