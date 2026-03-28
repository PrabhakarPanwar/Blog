import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const categories = [
  "Computer Science", "Systems", "Web Development", "Database",
  "Networking", "Programming", "Security", "Career",
  "Software Engineering", "Artificial Intelligence", "Design", "Other"
];

function AddTeamMember() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [initial, setInitial] = useState("")
  const [role, setRole] = useState("")


  //Category

  async function dataSend(e) {
    e.preventDefault()
    let obj = {
      name, email, role, initial
    }

    let res = await axios.post("http://localhost:8000/teamdata", obj)

    if (!res.data.success) {
      return toast.error(res.data.msg)
    }

    toast.success(res.data.msg)
  }
  return (
    <main className='bg-gray-100'>

      <section className='pl-10'>
        <form className='py-3 flex flex-col items-center gap-5' onSubmit={dataSend}>
          <h1 className='text-center'>Team Member</h1>
          <section className='flex  items-center gap-5'>
            <div>
              <p>Name </p>
              <input className='h-10 border-gray-300 border-2' type="text" placeholder='Prabhakar' onChange={(i) => setName(i.target.value)} />
            </div>
            <div>
              <p>Email </p>
              <input className='h-10 border-gray-300 border-2' type="text" placeholder='name@gmail.com' onChange={(i) => setEmail(i.target.value)} />
            </div>
            <div>
              <p>Name First Letter </p>
              <input className='h-10 w-10 border-gray-300 border-2' type="text" maxLength="1" autoCapitalize={initial} placeholder='P' onChange={(i) => setInitial(i.target.value)} />
            </div>
          </section>
          <div>
            <p>Role</p>
            <select className='h-10 border-gray-300 border-2' onChange={(i) => setRole(i.target.value)}>
              {categories.map((i, index) => (
                <option key={index} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <button className='w-20 h-10 rounded-md bg-black text-white' type="submit" >Add</button>


        </form>
      </section>
    </main>
  )
}

export default AddTeamMember