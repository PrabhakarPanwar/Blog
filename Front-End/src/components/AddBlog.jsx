import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const categories = [
    "Computer Science", "Systems", "Web Development", "Database",
    "Networking", "Programming", "Security", "Career",
    "Software Engineering", "Artificial Intelligence", "Design", "Other"
];

function AddBlog() {

    const [img, setImg] = useState(false)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [cat, setCat] = useState("")
    const [tag, setTag] = useState([])
    const [blogcontent, setBlogcontent] = useState([{ type: "paragraph", text: "" }])


    //Category

    async function dataSend(e) {
        e.preventDefault()
        let formData = new FormData()
        formData.append("title", title)
        formData.append("description", desc)
        formData.append("category", cat)
        formData.append("img", img)
        formData.append("tag", JSON.stringify(tag))
        formData.append("blogcontent", JSON.stringify(blogcontent))

        let res = await axios.post("http://localhost:8000/blogdata", formData)

        if (!res.data.success) {
            return toast.error(res.data.msg)
        }

        toast.success(res.data.msg)
    }
    return (
        <main className='bg-gray-100'>

            <section className='pl-10'>
                <form className='py-3 flex gap-5 justify-evenly items-center' onSubmit={dataSend}>
                    <main className=' text-center text-3xl'>
                        <h1 className='mb-3'>Upload Images</h1>
                        <label htmlFor="img1">
                            <img className='h-[30vh] cursor-pointer  object-cover rounded-full' src={`${img ? URL.createObjectURL(img) : "https://img.freepik.com/free-vector/modern-download-upload-web-symbol-cloud-storage_1017-59711.jpg?semt=ais_hybrid&w=740&q=80"}`} name="image" alt="image" />
                            <input className='hidden' type="file" id="img1" accept='image/*' onChange={(i) => setImg(i.target.files[0])} />
                        </label>
                    </main>
                    <main className=''>
                        <section className=' py-3 flex  items-center gap-5'>
                            <div>
                                <p>Blog Title</p>
                                <input className='h-10 border-gray-300 border-2' type="text" placeholder='Type Here' onChange={(i) => setTitle(i.target.value)} />
                            </div>
                            <div>
                                <p>Blog Category</p>
                                <select className='h-10 border-gray-300 border-2' onChange={(i) => setCat(i.target.value)}>
                                    {categories.map((i, index) => (
                                        <option key={index} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>
                        </section>
                        <section className=' py-3'>
                            <p>Blog Description</p>
                            <textarea className='p-2  border-gray-300 border-2' name="" id="" placeholder='Type Here' onChange={(i) => setDesc(i.target.value)} cols="50"></textarea>
                        </section>
                        <section className='py-1'>
                            <p>Blog Content Type</p>

                            <p>Blog ContentText</p>

                        </section>
                        <button className='px-10 py-3 bg-black text-white' type="submit" >Add</button>
                    </main>


                </form>
            </section>
        </main>
    )
}

export default AddBlog