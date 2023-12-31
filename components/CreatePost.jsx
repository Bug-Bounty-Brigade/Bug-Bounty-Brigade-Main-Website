"use client"
import React, { useState, useEffect, use } from 'react'
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react'
import SignInCompoment from "./client/SignInComponent";

const CreatePost = () => {
    const { status, data: session } = useSession();
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);
    // user image
    const [userImage, setUserImage] = useState('');
    // title
    const [title, setTitle] = useState('');
    // body
    const [body, setbody] = useState('');
    // image
    const [image, setImage] = useState('');
    useEffect(() => {
        if (session) {
            console.log(session.user.name);
            setUserImage(session.user.image);
            try {
                fetch("https://www.bugbountybrigade.tech/api/user/googlesignin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullname: session.user.name,
                        email: session.user.email,
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.token) {
                            // Access the token from the response data
                            const token = data.token;
                            console.log("Token:", token);
                            localStorage.setItem("token", token);
                        } else {
                            console.error("Token not found in the response");
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    const handleImageChange = (pic) => {
        if (pic == "undefined") {
            console.log('no image selected')
            return;
        }
        if (pic.size > 1024 * 1024 * 2) {
            console.log('image size too big')
            return;
        }
        if (pic.type !== 'image/jpeg' && pic.type !== 'image/png') {
            console.log('image type not supported')
            return;
        }
        if (pic.type == 'image/jpeg' || pic.type == 'image/png') {
            const data = new FormData();
            data.append("file", pic);
            data.append("upload_preset", "bugbounty");
            data.append("cloud_name", "dskif2lcs");
            fetch("https://api.cloudinary.com/v1_1/dskif2lcs/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setImage(data.url.toString());
                    console.log(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submit');
        console.log(title, body, image)
        const res = await fetch('https://www.bugbountybrigade.tech/api/userBlogData/upload/6525152e7c01b579fa067ec7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: body,
                imageUrl: image,
                userImage: userImage,
            }),
        })

        const text = await res.text();
        console.log(text);

        try {
            const data = JSON.parse(text);
            console.log(data);
        } catch (err) {
            console.error('Failed to parse JSON:', err);
        }
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
                    <form onSubmit={handleSubmit} >
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
                            <input type="file" name="photo" accept='image/*' id="photo" className='rounded-md ' onChange={(e) => handleImageChange(e.target.files[0])} />
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
