import PhotoCard from "@/components/PhotoCard"
import PageLayout from "@/components/PageLayout";

const page = () => {
  return (
    <PageLayout>
    <div className="max-w-6xl min-h-screen mx-auto">
        <section className="flex flex-col p-12 space-y-4 md:space-y-0 md:space-x-8 md:flex-row ">
          <h2 className="md:w-1/2 text-4xl font-semibold text-transparent bg-gradient-to-r from-[#EEB33B] to-[#E8EABC] bg-clip-text "> Bug Bounty Brigade - Global Hacking Community</h2>
          <p className="text-lg md:w-1/2">At Bug Bounty Brigade, we are dedicated to empowering cybersecurity guardians worldwide. Our mission is to cultivate a thriving community <span className="text-[#E8EABB]"> by bug hunters, for bug hunters </span>. Join our vibrant community of ethical hackers and enthusiasts as we make a positive impact on cybersecurity.</p>
        </section>
        <section>
          <h3 className="text-3xl text-center font-semibold text-transparent bg-gradient-to-r from-[#EEB33B] to-[#E8EABC] bg-clip-text">Meet Our Team</h3>
          <div className="grid items-center justify-center grid-cols-1 gap-6 mx-auto mt-4 md:mt-8 md:grid-cols-2 lg:grid-cols-4 last:mb-2 last:md:mb-0">
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            <PhotoCard name="Templeton Peck" companyname="Designation at Company name"/>
            
          </div>
        </section>
    </div>
    </PageLayout>
  )
}

export default page
