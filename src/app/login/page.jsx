import React from 'react'
import LoginForm from './components/LoginForm'

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50 p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* left info panel */}
        <div className="px-6">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">Welcome back</h1>
          <p className="text-gray-600 mb-6">Sign in to continue to your account and manage your services.</p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full" />
              <span>Fast and secure access</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-amber-400 rounded-full" />
              <span>Manage bookings & services</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-green-400 rounded-full" />
              <span>Account protection</span>
            </div>
          </div>
        </div>

        {/* right form card */}
        <div
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 transform transition duration-300 hover:scale-[1.02] w-full"
          style={{ animation: "cardEntry 420ms ease both" }}
        >
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Sign in</h2>
            <p className="text-sm text-gray-500">Enter your credentials to access your account</p>
          </div>
          <LoginForm />
        </div>
      </div>

      <style>{`
        @keyframes cardEntry {
          from { opacity: 0; transform: translateY(8px) scale(.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}
