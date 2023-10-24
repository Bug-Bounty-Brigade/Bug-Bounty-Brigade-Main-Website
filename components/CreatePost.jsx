"use client"
import React from 'react'
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react'
import SignInCompoment from "./client/SignInComponent";

const CreatePost = () => {
    const { status, data: session } = useSession();

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
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </div>
    )
}

export default CreatePost
