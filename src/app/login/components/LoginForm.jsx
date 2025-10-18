'use client'
import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import SocialLogin from './SocialLogin'

export default function LoginForm() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.email || !form.password) {
      alert('Email and password are required')
      return
    }

    setLoading(true)
    try {
      const res = await signIn("credentials", {
        redirect: false, // ❗ prevents NextAuth from redirecting automatically
        email: form.email,
        password: form.password,
      })

      if (res?.error) {
        alert('Invalid email or password')
      } else {
        alert('Login successful!')
        router.push('/')
      }
    } catch (err) {
      console.error('Login failed', err)
      alert('Login failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
          placeholder="you@example.com"
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Password</span>
        </label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full mt-2"
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
      <SocialLogin></SocialLogin>
    </form>
  )
}
