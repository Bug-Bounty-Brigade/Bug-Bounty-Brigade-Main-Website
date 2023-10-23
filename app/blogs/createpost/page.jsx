import PageLayout from '@/components/PageLayout'
import React from 'react'
import SignInCompoment from '@/components/client/SignInComponent'
const page = () => {

    return (
        <PageLayout>
            <div className='min-h-screen'>
                <h3>
                    Create Post
                </h3>
                <SignInCompoment />
            </div>
        </PageLayout>
    )
}

export default page
