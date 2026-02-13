
import { Project, Experience } from "./types";

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Personal Virtual Assistant",
        description: "A comprehensive virtual assistant designed to simplify your digital life. Featuring voice recognition, task automation, and intelligent responses to help manage your schedule and information.",
        image: "PVA.jpg",
        link: "PVA.html",
        tags: ["Python", "AI", "Automation", "NLP"]
    },
    {
        id: "2",
        title: "Password Strength Checker",
        description: "A security tool that evaluates the strength of your passwords in real-time. Provides feedback on complexity and suggestions for creating more secure credentials.",
        image: "PASSWORD-STRENGTH-CHECKER-1.jpg",
        link: "Passwordchecker.html",
        tags: ["Cybersecurity", "Python", "Web Security"]
    },
    {
        id: "3",
        title: "R. D. H. in Encrypted Images using Multi-MSB Prediction and Huffman Coding",
        description: "Focused on enhancing data embedding capacity while ensuring complete and lossless image recovery",
        image: "IEEE.png",
        link: "IEEE1.html",
        tags: ["React", "JavaScript", "HTML/CSS", "Gamification"]
    },
    {
        id: "4",
        title: "The Non-Zero-Sum Game of Steganography in Heterogeneous Environments",
        description: "Applied game theory principles to optimize data-hiding strategies while minimizing the risk of detection.",
        image: "IEEE2.png", // Using a generic image relevant to ML
        link: "FDML.html",
        tags: ["Machine Learning", "Data Science", "Python"]
    }
];

export const EXPERIENCES: Experience[] = [
    {
        id: "1",
        company: "CODETECH IT SOLUTIONS",
        role: "Cybersecutiy & Enthical Hacking Internship",
        period: "Feb - June 2025",
        description: "Gained practical experience in ethical hacking and cybersecurity methodologies under expert mentorship. Assisted the team in conducting comprehensive system and network security audits to identify potential risks. Actively participated in penetration testing of web applications, successfully discovering and reporting vulnerabilities to enhance overall security posture.",
        technologies: ["Computer networks", "Ethical Hacking", "Whireshark", "Nmap"]
    },
    {
        id: "2",
        company: "Next24Tech",
        role: "Webdeveloper Intern",
        period: "May - July 2024",
        description: "Assisted in building scalable software solutions. Gained hands-on experience in full-stack development and version control workflows.",
        technologies: ["HTML", "CSS", "JavaScript", "Baisc React"]
    },
    {
        id: "3",
        company: "Chegg",
        role: "CSE Subject Matter Expert",
        period: "2022 - 2025",
        description: "Created educational content focused on mathematics and programming. Especially on C, C++, Java, Python, and Data Structures and Algorithms.",
        technologies: ["Java", "C++", "Python", "Data Structures and Algorithms"]
    }
];

export const COLLEGE_EXPERIENCES: Experience[] = [
    {
        id: "1",
        company: "SICO",
        role: "Video Editor",
        period: "March - March,2023",
        description: "I am honored to receive the Certificate of Appreciation from the Extra Curricular &Co-Curricular Activities Committee for my role in successfully organizing various clubs and college events.",
        technologies: ["Editor", "CANVA", "Public Speaking"]
    },
    {
        id: "2",
        company: "SICO",
        role: "Lead Designer",
        period: "March/2023 - June/2024",
        description: "Proud to receive the Certificate of Achievement for successfully organizing all clubs and college events during the academic year 2024-2025. As an Event Coordinator, my responsibilities included",
        technologies: ["Adobe Photoshop", "Premiere Pro", "Capcut", "Team work"]
    },
    {
        id: "3",
        company: "R.V.R & J.C. College of Engineering",
        role: "Student Technical Advisor",
        period: "June/2024 - Dec/2024",
        description: "Actively contributed to the Student Integrated Committee, organizing college events and managing club activities. Designed creative posters and videos to enhance event engagement and campus outreach.",
        technologies: ["Leadership", "Communication", "Task Management"]
    }
];
