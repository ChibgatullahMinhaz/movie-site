import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

type LoginFormInputs = {
  email: string;
  password: string;
};

const AdminLogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    setFirebaseError("");

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Login successful!");
      // TODO: Redirect to admin dashboard
    } catch (error: any) {
      setFirebaseError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen px-4"
      style={{ backgroundColor: "#151617" }} // Main site bg color
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden"
      >
        {/* Decorative Movie-style Circle */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-red-600 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-blue-600 rounded-full opacity-20 animate-pulse" />

        <h2 className="text-3xl font-bold mb-8 text-white text-center">Admin Login</h2>

        {/* Email */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-200">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
            placeholder="admin@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block mb-2 font-medium text-gray-200">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required", minLength: 6 })}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-gray-400 hover:text-gray-200 transition"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Firebase Error */}
        {firebaseError && (
          <p className="text-red-500 text-center mb-4">{firebaseError}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold text-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
