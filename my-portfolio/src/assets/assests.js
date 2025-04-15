import dummyPic from './images/contact_img.png'
import profile from './images/profile.jpeg'
import profile2 from './images/profile2.jpeg'
import event_echo from './images/event-echo.png'
import object_detection from './images/object-detection.jpg'
import flower from './images/flower.jpg'
import biometric_attendance from './images/biometric-attendance.jpg'
import chat_app from './images/chat-app.png'
// Import your CV files
import resumeDS from "../assets/Lotanna Okeke DS Resume.pdf";
import resumeSWE from "../assets/Lotanna Okeke SWE Resume.pdf";

export const assests = {
    dummyPic,
    profile,
    profile2,
    event_echo,
    object_detection,
    chat_app,
    flower,
    biometric_attendance,
    resumeDS,
    resumeSWE,
}

export const colors = {
    primary: '##C8A26B',
    secondary: '#2c2c2d',
}

export const socials = [
    ["LinkedIn", "https://www.linkedin.com/in/lotanna-okeke-811a92240"],
    ["Twitter", "https://x.com/aauser44?s=08"],
    ["Instagram", "https://www.instagram.com/lotanna.okeke?igsh=NDlvb2FhaHJsbWg0"],
    ["Github", "https://github.com/lotanna-okeke"],
]

//Type 1 is for work experience, type 2 is for education
export const experiences = [
    {
        type: 1,
        organization: "Bluetag Technologies",
        role: "Mobile Application Developer (Intern)",
        duration: "Feb. 2025-April. 2025",
        text: "Worked under a team as a frontend mobile developer using Flutter. Implemented some key functionalities and provided useful insights to some of the designs.",
    },
    {
        type: 1,
        organization: "Pan-Atlantic University",
        role: "Designer and Backend Engineer",
        duration: "Dec. 2023-Feb. 2024",
        text: "Worked as a team to develop a Student Information and Learning Management System (SILMS). Designed wireframes and prototypes using Figma. Developed REST APIs using Nest.js and PostgreSQL.",
    },
    {
        type: 1,
        organization: "VAS2Nets Technologies",
        role: "Mobile Application Developer (Intern)",
        duration: "July. 2023 - Oct. 2023",
        text: "Designed and developed the mobile frontend of a web service using Figma and Flutter. Improved design based on feedback and collaborated with web frontend and backend developers.",
    },
    {
        type: 2,
        organization: "Pan-Atlantic University",
        role: "Bachelor of Science in Computer Science",
        duration: "Nov. 2020 - Oct. 2024",
        text: "Relevant Courses: Linear Algebra, Data Structures, Discrete Structures, Structured Programming, Data Management, System Analysis and Design, Object-Oriented Programming, Algorithms and Complexity Analysis, Formal Methods and Software Development, Computational Science and Numerical Methods, Software Engineering",
    }
]

export const allProjects = [
    {
        id: 1,
        picture: assests.event_echo,
        projectName: "Event Echo",
        projectTechnology: "Mobile",
        projectDescription:
            "A full-stack mobile reminder application using Spring Boot with Flutter",
        skillsUsed: ["Flutter", "Spring Boot", "PostgreSQL"],
        projectLink: "https://github.com/lotanna-okeke/EventEcho",
    },
    {
        id: 2,
        picture: assests.object_detection,
        projectName: "Video Object Detection",
        projectTechnology: "Computer Vision",
        projectDescription:
            "An interface that detects the objects in a video of the users choice.",
        skillsUsed: ["Python", "YOLO algorithm"],
        projectLink: "https://github.com/lotanna-okeke/LOkekeCSC418/blob/main/Week6/Object_Detection_Project.ipynb",
    },
    {
        id: 3,
        picture: assests.dummyPic,
        projectName: "Portfolio",
        projectTechnology: "Website",
        projectDescription:
            "A modern and stylish website showcasing important details about me.",
        skillsUsed: ["React", "Tailwind", "Vite"],
        projectLink: "https://github.com/lotanna-okeke/my-portfolio",
    },
    {
        id: 4,
        picture: assests.chat_app,
        projectName: "Chat App",
        projectTechnology: "Mobile",
        projectDescription:
            "A mobile application chat app using Dart and Firebase to handle the logic, with Flutter as the frontend.",
        skillsUsed: ["Flutter", "Firebase"],
        projectLink: "https://github.com/lotanna-okeke/flutter_personal_projects/tree/main/chat_app",
    },
    {
        id: 5,
        picture: assests.flower,
        projectName: "Flower Image Recognition",
        projectTechnology: "Deep Learning",
        projectDescription:
            "A model that identifies the type of flower using its picture, with an accuracy of above 80%.",
        skillsUsed: ["Python", "matplotlib", "tensorflow"],
        projectLink: "https://github.com/lotanna-okeke/Deep-Learning/tree/main",
    },
    {
        id: 6,
        picture: assests.biometric_attendance,
        projectName: "Biometrics Attendance System",
        projectTechnology: "Desktop",
        projectDescription:
            "An attendance management system that uses fingerprints.",
        skillsUsed: ["JFrames", "MySQL"],
        projectLink: "https://github.com/lotanna-okeke/Attendance",
    },
];