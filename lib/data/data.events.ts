import automationbounty from "../../app/assets/automationbounty.png";
import getintocybersecurity from "../../app/assets/getintocybersecurity.png";
import beginnerbountyseries from "../../app/assets/beginnerbountyseries.png";
import informationdisclosure from "../../app/assets/informationdisclosure.png";
import cvehunting from "../../app/assets/cvehunting.png";
import cybercrimeinvseting from "../../app/assets/cybercrimeinvseting.png";
import getstartedwithoscp from "../../app/assets/getstartedwithoscp.png";
import reflectedxss from "../../app/assets/reflectedxss.png";
import web3andbugbounty from "../../app/assets/web3andbugbounty.png";
import FABypassauthentication from "../../app/assets/2FABypassauthentication.png";
import reconeasyfindings from "../../app/assets/reconeasyfindings.png";
import anbughunter from "../../app/assets/anbughunter.jpg";
import nuclei from "../../app/assets/nuclei.jpg";
import bugBounty101 from "../../app/assets/bugBounty101.jpg";
import lowHangingBug from "../../app/assets/lowHangingBugs.jpg";
import reconSeries from "../../app/assets/reconSeries.jpg";


interface EventPosts {
    image: any;
    date: string;
    title: string;
    description: string;
    attendeesCount: string;
    event_link: string;
}

export const events: EventPosts[] = [
    {
        image: FABypassauthentication,
        date: "Sat, Oct 21, 2023, 7:30PM IST",
        title: "2FA Bypass in Authentication",
        description:
            "Join us on October 21st at 7:30 PM as Aditya dives deep into the world of 2FA bypass in authentication. This is your chance to enhance your cybersecurity skills and stay updated on the latest techniques.",
        attendeesCount: "Aditya Shende | 122 attendees",
        event_link: "https://youtu.be/im-7MQELiyY?si=0rjVSKR9Fy1RMW4E"
    },
    {
        image: reflectedxss,
        date: "Sun, Oct 8, 2023, 5:00PM IST",
        title: "Reflected XSS And Bypasses",
        description:
            "🙌 A heartfelt thank you to our incredible speaker, Shiv Pratap Singh , for sharing his expertise on Reflected XSS And Bypasses. Your insights illuminated our Bug Bounty Brigade community!",
        attendeesCount: "Shiv Pratap Singh | 122 attendees",
        event_link: "https://youtu.be/xxw8pD-Qhj0?si=X02WAKup9JkJF6sp"
    },
    {
        image: cvehunting,
        date: "Sat, Sept 9, 2023, 6:00PM IST",
        title: "CVE Hunting on Programs",
        description:
            "🚀 The Session Concludes: A Resounding Triumph! 🌟The virtual halls of our recent session were buzzing with enthusiasm as the brilliant SANJAY SINGH shared his invaluable insights on CVE Hunting on Programs.🎙️ The excitement was palpable, and today, as the session comes to a close, we are left with a profound sense of satisfaction and gratitude.",
        attendeesCount: "SANJAY SINGH | 132 attendees",
        event_link: "https://youtu.be/4_G6YUasJm8?si=Aj7Z9hSqUxaJn4i3"
    },
    {
        image: cybercrimeinvseting,
        date: "Sun, Aug 27, 2023, 7:00PM IST",
        title: "Cybercrime investigation using OSINT and dark web operations",
        description:
            "As the Team Leader at Trinity Infotech Solutions, Ashwin Ragav is dedicated to harnessing the power of Open Source Intelligence (OSINT) techniques for effective cybercrime investigation. His insights promise to shed light on innovative approaches to gather and analyze digital footprints, bolstering our defense against modern cyber threats.",
        attendeesCount: "Ashwin Ragav | 122 attendees",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"
    },
    {
        image: web3andbugbounty,
        date: "Sun, Aug 20, 2023, 7:00PM IST",
        title: "Web3 and Bug Bounties",
        description:
            "🙌 Gratitude to Our Speaker, Rudra Singh for an Enlightening Session! 🎉We extend our heartfelt thanks to Rudra Singh for sharing his invaluable insights and expertise during our session on Web3 and Bug Bounties" +
            " Rudra's profound knowledge and passion for cybersecurity illuminated our understanding of these intricate subjects. His dedication to the Bug Bounty Brigade community has truly enriched our learning experience",
        attendeesCount: "Rudra Singh | 122 attendees",
        event_link: "https://youtu.be/Qwk5B5uflYg?si=ziBXH50twhDffgSG"
    },
    {
        image: informationdisclosure,
        date: "Sun, Aug 13, 2023, 4:30PM IST",
        title: "Information Disclosure Methodology",
        description:
            "A resounding round of applause and heartfelt thanks to our remarkable speaker, Agnibha Dutta (AnonY0gi), for a captivating session on Information Disclosure Methodology. Your insights, expertise, and dedication truly ignited a passion for cybersecurity in all of us!",
        attendeesCount: "Agnibha Dutta (AnonY0gi) | 81 attendees",
        event_link: "https://youtu.be/6Uf55hv8E1I?si=2DLazxfUuYo-q-bh"
    },
    {
        image: getintocybersecurity,
        date: "Sat, Jul 29, 2023, 5:00PM IST",
        title: "How to Get Into Cyber Security ",
        description:
            "Are you curious about breaking into the dynamic field of Cyber Security? Our esteemed Cyber Security Consultant, Sanjay Singh, will guide you on how to kickstart your journey and build a rewarding career in cybersecurity. In this session, you'll gain essential insights into starting your cybersecurity journey, crafting an impactful resume that stands out to recruiters, navigating certifications and skills to boost your employability, and acquiring practical experience and networking opportunities.",
        attendeesCount: "Sanjay Singh| 124 attendees",
        event_link: "https://youtu.be/E_k7yP3ua9w?si=SmeUpGcMGE6HCGBn"
    },
    {
        image: automationbounty,
        date: "Sat, Jul 22, 2023, 6:00PM IST",
        title: "Automating Bug Bounty",
        description:
            "In this exciting session, esteemed speaker S Rahul a highly accomplished Cyber Security Analyst, and skilled Bug Bounty Hunter, delved into the secrets of automating bug bounty workflows. From privacy and data protection to penetration testing, Rahul's expertise in various cybersecurity domains enriched the session for both seasoned bug hunters and aspiring enthusiasts",
        attendeesCount: "S Rahul | 122 attendees",
        event_link: "https://youtu.be/QfHIc02Bzp8?si=JM51tL06HtynhETt"
    },
    {
        image: beginnerbountyseries,
        date: "Sun, Jul 16, 2023, 6:00PM IST",
        title: "Beginner Bounty Series",
        description:
            "Join Bug Bounty Brigade and OWASP Kaithal for an educational bug-hunting session. Our speaker, Shaik Arif Ali, will focus on discovering low-hanging fruits in bug hunting, making it ideal for beginners. This collaborative event provides a supportive environment for bug bounty enthusiasts, whether you're new to the field or looking to refine your skills. Expect hands-on examples and a community-driven approach to learning.",
        attendeesCount: "Shaik Arif Ali | 54 attendees",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"
    },
    {
        image: getstartedwithoscp,
        date: "Sat, Jul 8, 2023, 10:00AM IST",
        title: "How to get started with OSCP",
        description:
            "Usman Shah shared his incredible journey of becoming an Offensive Security Certified Professional (OSCP). From exploring the value of OSCP to unlocking career opportunities, his insights provided valuable guidance for aspiring cybersecurity professionals.",
        attendeesCount: "Usman Shah | 122 attendees",
        event_link: "https://youtu.be/pwOHD06bBXU?si=dBck9OFt1VJ1U-ex"
    },
    {
        image: reconeasyfindings,
        date: "Sat, Jul 15, 2023, 8:00PM IST",
        title: "Recon & Easy Findings",
        description:
            "Jairam delved into the critical aspects of reconnaissance in bug bounty hunting, along with tips and techniques for uncovering easy findings. He shared practical insights gained from his extensive experience in the field, allowing you to enhance your bug-hunting capabilities.",
        attendeesCount: "Jairam Dupati",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"
    },
    {
        image: anbughunter,
        date: "Sat, July 8, 2023, 7:30PM IST",
        title: "An Bug Hunter's Approach to Finding Misconfigured Cloud Assets",
        description:
            "Bhagavan Bollina shared his approach to find misconfigured cloud assets, offering valuable insights and strategies that can help you uncover critical vulnerabilities.",
        attendeesCount: "Bhagavan Bollina",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"
    },
    {
        image: lowHangingBug,
        date: "Sun, Jul 8, 2023, 6:00PM IST",
        title: "Low Hanging Bugs",
        description:
            "In this session, we will delve into the fundamentals of bug hunting, focusing on low-hanging fruits - easily discoverable vulnerabilities that are perfect for beginners. Led by our speaker, we will cover essential concepts, techniques, and tools to effectively identify and exploit these bugs.",
        attendeesCount: "Shaikh Arif Ali",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"

    },
    {
        image: nuclei,
        date: "Sun, Jun 18, 2023, 10:00PM IST",
        title: "Nuclei For Bug Bounty",
        description:
            "Raju demonstrated practical proofs of concepts (PoCs) using Nuclei, making it an interactive and engaging experience.",
        attendeesCount: "Raju Basak",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"
    },
    {
        image: reconSeries,
        date: "Sat, Jun 10, 2023, 6:00PM IST",
        title: "Bug Bounty & Recon Series",
        description:
            "In this session, Jairam will delve into the critical aspect of reconnaissance in bug bounty hunting. Learn valuable techniques and strategies to effectively gather information and identify potential vulnerabilities in target systems. Enhance your bug-hunting capabilities and gain practical insights from Jairam's experience in the field.",
        attendeesCount: "Jairam Dupati",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"

    },
    {
        image: bugBounty101,
        date: "Mon, Jun 5, 2023, 10:00AM IST",
        title: "Bug Bounty 101",
        description:
            "Shubham's contributions to the security community are commendable. He has reported more than 50 bugs to various companies, helping them strengthen their systems and protect user data. With his practical insights and real-life experiences, Shubham is undoubtedly the perfect mentor to guide us in our cybersecurity journey.",
        attendeesCount: "Shubham Tiwari",
        event_link: "https://www.youtube.com/@bugbountybrigade/videos"

    }
];
