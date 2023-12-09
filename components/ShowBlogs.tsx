"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
interface Blog {
    title: string;
    body: string;
    imageUrl: string;
    userImage: string;
    fullname: string;

}
const ShowBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    useEffect(() => {
        try {
            fetch('https://www.bugbountybrigade.tech/api/userBlogData/fetchBlogs',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(res => res.json())
                .then(data => setBlogs(data.allData))
        }
        catch (err) {
            console.log(err)
        }
    }, [])


    return (
        <section className='flex flex-col min-h-screen gap-4 mt-4'>
            {
                blogs && blogs.map((blog, index) => {
                    return (
                        <article key={index} className='bg-[#40392F] rounded-xl p-4 md:p-6 flex gap-4 min-h-[18.75rem]  cursor-pointer flex-col md:flex-row'>
                            <div className='md:w-3/4'>
                                <header className='flex items-center space-x-2'>
                                    <Image src={blog.userImage} width={200} alt={blog.fullname} height={200} className='rounded-full h-9 w-9' />
                                    <p className='text-[#D3D3D3] font-semibold custom-text-edge-cap'>{blog.fullname}</p>
                                </header>
                                <h1 className=' md:text-2xl font-bold text-[#E8EABB] my-2'>{blog.title}</h1>
                                <p className='line-clamp-2 text-[#D3D3D3] md:text-lg'>
                                    {blog.body}
                                </p>
                            </div>
                            <Image src={blog.imageUrl} width={200} alt={blog.title} height={200} className='rounded-md w-full md:w-1/4 h-[16rem]' />
                        </article>
                    )
                })
            }
        </section>
    )
}

export default ShowBlogs
