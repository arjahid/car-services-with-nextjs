import React from "react";
import RegisterForm from "./components/RegisterForm";

export default function page() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-8">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* left info panel */}
          <div className="px-6 py-8">
            <div className="mb-4">
              <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">Create your account</h1>
              <p className="text-gray-600">Join us to access exclusive services. Secure and fast registration.</p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full" />
                <span className="text-gray-700">Fast signup</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-amber-400 rounded-full" />
                <span className="text-gray-700">Secure data</span>
              </div>
            </div>
          </div>

          {/* right form card */}
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 transform transition duration-400 hover:scale-[1.02] w-full"
            style={{ animation: "slideUp 500ms ease both" }}
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Register</h2>
              <p className="text-sm text-gray-500">Fill the details to create your account</p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>

      {/* inline keyframes for entrance animation */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
