import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Login() {
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  async function sendData() {
    let obj = { name, pwd }
    let res = await axios.post("http://localhost:8000/login", obj, { withCredentials: true })
    if (!res.data.success) {
      return toast.error(res.data.msg)
    }
    toast.success(res.data.msg)
    setTimeout(() => {
      window.location.href = "/admin/dashboard"
    }, 1000);

  }
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">

        {/* Top banner */}
        <div className="bg-stone-900 px-8 py-6">
          <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">The Study Blog</p>
          <h1 className="text-white text-3xl font-serif font-bold leading-tight">Admin Login</h1>
          <p className="text-stone-400 text-sm mt-1">Sign in to manage your stories</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8 flex flex-col gap-5">

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Username</label>
            <input onChange={(i) => setName(i.target.value)}
              type="text"
              placeholder="your_username"
              className="border border-stone-200 bg-stone-50 rounded-lg px-4 py-3 text-sm text-stone-800 placeholder-stone-300  focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Password</label>
            <input onChange={(i) => setPwd(i.target.value)}
              type="password"
              placeholder="••••••••"
              className="border border-stone-200 bg-stone-50 rounded-lg px-4 py-3 text-sm text-stone-800 placeholder-stone-300  focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
            />
          </div>

          <button onClick={sendData} className="mt-2 bg-stone-900 hover:bg-stone-700 text-white text-sm uppercase tracking-widest font-medium py-3 rounded-lg transition flex items-center justify-center gap-2">
            Login
          </button>

          <p className="text-center text-xs text-stone-400 italic">Authorized personnel only</p>
        </div>

      </div>
    </div>
  )
}

export default Login