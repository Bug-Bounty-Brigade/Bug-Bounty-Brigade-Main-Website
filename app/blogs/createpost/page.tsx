import PageLayout from '@/components/PageLayout'
import React from 'react'
import CreatePost from '@/components/CreatePost'
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Bug Bounty Brigade - Blogs Create",
    description: "Create a blog in Bug Bounty Brigade to share your knowledge ",
};

const page = () => {
    return (
        <PageLayout>
            <div className='min-h-screen'>
                <CreatePost />
            </div>
        </PageLayout>
    )
}

export default page
