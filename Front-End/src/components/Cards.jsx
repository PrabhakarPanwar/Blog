import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

function Cards() {
    const { blogData } = useContext(UserContext)
    // const [load, setLoad] = useState(false)

    // useEffect(() => {
    //     setLoad(blogData)
    // }, [blogData])

    if (!blogData) {
        return <p>Loading...</p>
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 py-3'>
            {
                // load && load
                blogData.map((i, index) => (
                    <Link key={index} className='' to={`/topic/${i.id}`}>
                        <center className='w-[350px] h-[350px] transition-transform rounded-md overflow-hidden active:scale-95 text-center group relative'>
                            <img className='bg-black w-full h-full group-hover:scale-110 duration-500 ease-in-out overflow-hidden' src={i.imagelink} alt={i.title} />
                            <div className=' absolute bottom-0 p-2 text-white'>
                                <h2 >{i.title}</h2>
                            </div>
                                <h3 className='absolute top-5 left-5 bg-yellow-300 p-1 rounded-md font-medium'>{i.category}</h3>
                        </center>
                    </Link >
                ))
            }
        </div>
    )
}

export default Cards