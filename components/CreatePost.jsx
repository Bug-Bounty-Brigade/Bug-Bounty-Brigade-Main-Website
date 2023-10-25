"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react'
import SignInCompoment from "./client/SignInComponent";
import { redirect } from 'next/dist/server/api-utils';

const CreatePost = () => {
    const { status, data: session } = useSession();
    const [imagePreview, setImagePreview] = useState('');
    // title
    const [title, setTitle] = useState('');
    // body
    const [body, setbody] = useState('');
    // image
    const [image, setImage] = useState('');
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const blob = new Blob([file], { type: file.type });
            setImagePreview(URL.createObjectURL(blob));
            console.log(URL.createObjectURL(blob));
        } else {
            setImagePreview('');
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submit');
        console.log(
            title,
            body,
        )

    };

    return (
        <div>
            {!session && (
                <>
                    <h3>
                        Create Post
                    </h3>
                    <SignInCompoment />
                </>
            )}
            {session && (
                <>
                    <div className="flex items-center justify-center gap-3 p-4 rounded-md ">
                        <div>
                            <span className="font-bold">{session?.user?.name}</span>
                        </div>
                        <Image
                            className="rounded-full"
                            src={session.user.image}
                            width={60}
                            height={60}
                            alt="user image"
                        />
                    </div>
                    <form onSubmit={handleSubmit} action="https://bug-bounty-brigade-backend.onrender.com/userBlogData/upload/6525152e7c01b579fa067ec7" method="POST" encType="multipart/form-data">
                        {/* input title */}
                        <div className="flex flex-col gap-2 p-4">
                            <label htmlFor="title" className='text-xl'>Title</label>
                            <input type="text"
                                onChange={
                                    (e) => {
                                        setTitle(e.target.value)
                                    }
                                }
                                name="title" id="title" className='p-2 text-black rounded-md' />
                        </div>
                        {/* input body */}
                        <div className="flex flex-col gap-2 p-4">
                            <label htmlFor="body" className='text-xl '>Content</label>
                            <textarea name="body" className='p-2 text-black rounded-md' id="body" cols="30" rows="10"
                                onChange={
                                    (e) => {
                                        setbody(e.target.value)
                                    }
                                }
                            ></textarea>
                        </div>
                        {/* input image */}
                        <div className="flex flex-col gap-2 p-4">
                            <label htmlFor="photo" className='text-xl'>Image</label>
                            <input type="file" name="photo" id="photo" className='rounded-md ' onChange={handleImageChange} />
                            {imagePreview && <Image src={imagePreview} alt="image preview" width={400} height={400} className="mt-2 bg-contain rounded-md " style={{ maxWidth: '100%' }} />}
                        </div>
                        {/* input submit */}
                        <div className="flex flex-col items-center justify-center gap-2 p-4">
                            <button type="submit" className='p-2 px-4 font-semibold text-black rounded-md bg-gradient-to-r from-yellow-700 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'>Submit</button>
                        </div>
                    </form>
                    <button className='p-2 px-4 font-semibold text-black rounded-md bg-gradient-to-r from-yellow-700 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none' onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </div>
    )
}

export default CreatePost
