import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import accountBg from "../Assets/account/accountBg.jpg";
import yoga from "../Assets/banner/yoga.jpg";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      if (isSignup) {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });

        const result = await response.json();
        if (response.status === 201) {
          alert(result.message);
          navigate('/auth');
        } else {
          alert(result.error || "Signup failed");
        }
      } else {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.status === 200) {
          alert("Login successful");
          navigate('/');
        } else {
          alert(result.error || "Login failed");
        }
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="min-h-screen py-5 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${accountBg})` }}
    >
      <div className="flex w-full max-w-4xl rounded-lg overflow-hidden bg-white/10 backdrop-blur-md shadow-1xl">
        <div className="w-full md:w-1/2 p-10 bg-white/20 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isSignup ? "Create an account" : "Sign in to your account"}
          </h2>
          <p className="text-gray-700 mb-6">
            {isSignup
              ? "Sign up now and unlock exclusive access!"
              : "Access your account by signing in below."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <label className="block text-gray-700 mb-1">Your name</label>
                <input
                  type="text"
                  placeholder="First Last"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {isSignup && (
              <div>
                <label className="block text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              {isSignup ? "Create Account" : "Sign In"}
            </button>
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <a
              href="/adminAuth"
              className="text-sm text-purple-600 hover:underline"
            >
              Admin Login
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            📧 <a href="mailto:Help@Aura.com">Divine Magic Healing.com</a>
          </div>
        </div>

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

export default AuthPage;
