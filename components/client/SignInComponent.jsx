"use client"
import React from 'react'
import Image from 'next/image'
import googleImg from '@/public/googleImg.svg'
import { signIn } from 'next-auth/react'

const SignInComponent = () => {
    const handleSignIn = async () => {
        signIn('google', { callbackUrl: 'http://localhost:3000/blogs/createpost' })
    };
    return (
        <button
            onClick={handleSignIn}
            className='flex items-center gap-4 pl-3 rounded-lg shadow-md '>
            <Image src={googleImg} alt="Google Logo" width={20} height={20} />
            <span className='px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700'>Sign in with Google</span>
        </button>
    )
}

export default SignInComponent
