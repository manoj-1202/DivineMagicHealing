import yoga from "../Assets/banner/yoga.jpg";
import accountBg from "../Assets/account/accountBg.jpg";

const AdminAuth = () => {
  return (
    <div
      className="min-h-screen py-5 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${accountBg})` }}
    >
      <div className="flex w-full max-w-4xl shadow-2xl rounded-lg overflow-hidden bg-white/10 backdrop-blur-md">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-10 bg-white/20 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
          <p className="text-gray-700 mb-6">Sign in to your admin dashboard</p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="/auth" className="text-sm text-purple-600 hover:underline">
              ← Back to Customer Login
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            📧 <a href="mailto:Help@Aura.com">Divine Magic Healing.com</a>
          </div>
        </div>

        {/* Right Illustration Section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white/20 backdrop-blur-md p-6">
          <img
            src={yoga}
            alt="Illustration"
            className="w-[80%] object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
