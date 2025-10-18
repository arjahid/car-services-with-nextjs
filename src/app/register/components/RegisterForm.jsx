'use client'
import { registerUser } from '@/app/actions/auth/registerUser';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function RegisterForm() {
    const router=useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const handleForm =async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            alert('Please fill all required fields.');
            return;
        }
        if (form.password !== form.confirm) {
            alert('Passwords do not match.');
            return;
        }
        // placeholder for submit logic
        const formData={
            name:form.name,
            email:form.email,
            password:form.password
        }
       await registerUser(formData);
        alert('Registration done');
        router.push('/login');
        setForm({ name: '', email: '', password: '', confirm: '' });
    };

    return (
        <form onSubmit={handleForm} className="space-y-4 w-full max-w-md">
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-bold">Name</span>
                </label>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-bold">Email</span>
                </label>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-bold">Password</span>
                </label>
                <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type="password"
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    type="password"
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div className="form-control w-full">
                <button type="submit" className="btn btn-primary w-full">
                    Register
                </button>
            </div>
        </form>
    )
}
