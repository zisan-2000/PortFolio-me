// dummyData.jsx

// Import the profile image
import profilePic from "../../assets/images/profile.jpg"; // Replace with the actual path

export const profileData = {
  name: "Md. Zulfiker Hossain",
  title: "Junior Software Engineer",
  description: `As a Junior Software Engineer at Birds of Eden/Adon Venture General
  Trading LLC, I specialize in building robust and efficient web
  applications using React Js and Tailwind CSS. My work involves
  creating dynamic and responsive user interfaces that are both visually
  appealing and highly functional. In addition to front-end development,
  I am also experienced in backend development using Django Rest
  Framework, where I focus on building scalable and secure APIs. My
  passion for coding drives me to continually improve and expand my
  skill set, ensuring that I deliver high-quality solutions that meet
  the needs of users and clients alike.`,
  image: profilePic,
};

//experience image

import adon from "../../assets/experience/adon.jpeg";
import southEastBank from "../../assets/experience/southEastBank.jpg";
import techEureka from "../../assets/experience/techEureka.jpg";
import therecreationit from "../../assets/experience/therecreationit.jpg";

export const experienceData = [
  {
    id: 1,
    date: "2022 - Present",
    title: "Junior Soft. Engineer",
    name: "Birds Of Eden/Adon Venture General Trading LLC",
    description: "Tech Solutions Inc.",
    image: adon,
  },
  {
    id: 2,
    date: "Summer 2021",
    title: "Trainee Soft-Engineer (spring boot)",
    name: "TechEureka",
    description: "software division of TGCL.",
    image: techEureka,
  },
  {
    id: 3,
    date: "2020 - 2021",
    title: "Trainee web developer",
    name: "The Recreation IT",
    description: " IT firm and IT service provider",
    image: therecreationit,
  },
  {
    id: 4,
    date: "2019 - 2020",
    title: "Internship",
    name: "SouthEast Bank Ltd.",
    description: "Tech Academy",
    image: southEastBank,
  },
];

//educations

export const educationData = [
  {
    id: 1,
    date: "2019 - 2022",
    degree: "B.Sc in Computer Science & Engineering (CSE)",
    institution: "American International University, Bangladesh",
    grade: "CGPA 3.5/4",
  },
  {
    id: 2,
    date: "2015 - 2016",
    degree: "H.S.C in Science",
    institution: "Govt. Azizul Haque College, Bogura",
    grade: "GPA 5.00/5",
  },
  {
    id: 3,
    date: "2013 - 2014",
    degree: "S.S.C in Science",
    institution: "Bogura Zilla School, Bogura",
    grade: "GPA 5.00/5",
  },
  {
    id: 4,
    date: "P.S.C, J.S.C, S.S.C",
    degree: "Scholarship",
    institution: "Achieved in all",
    grade: "",
  },
];

//image of skills
import django from "../../assets/skills/django.jpg";
import figma from "../../assets/skills/figma.jpg";
import git from "../../assets/skills/git.jpg";
import htmlcss from "../../assets/skills/html-css.jpg";
import javascript from "../../assets/skills/javascript.jpg";
import next from "../../assets/skills/next.jpg";
import python from "../../assets/skills/python.jpg";
import react from "../../assets/skills/react.png";
import tailwind from "../../assets/skills/tailwind.jpg";

export const skillsData = [
  {
    id: 1,
    skill: "JavaScript",
    image: javascript, // Replace with the actual image path or URL
  },
  {
    id: 2,
    skill: "React.js",
    image: react, // Replace with the actual image path or URL
  },
  {
    id: 3,
    skill: "Next.js",
    image: next, // Replace with the actual image path or URL
  },
  {
    id: 4,
    skill: "Tailwind css",
    image: tailwind, // Replace with the actual image path or URL
  },
  {
    id: 5,
    skill: "HTML & CSS",
    image: htmlcss, // Replace with the actual image path or URL
  },
  {
    id: 6,
    skill: "Python",
    image: python, // Replace with the actual image path or URL
  },
  {
    id: 7,
    skill: "Django Rest-Framework",
    image: django, // Replace with the actual image path or URL
  },
  {
    id: 8,
    skill: "Git & GitHub",
    image: git, // Replace with the actual image path or URL
  },
  {
    id: 9,
    skill: "Figma",
    image: figma, // Replace with the actual image path or URL
  },
];

export const aboutMeData = {
  text: "I am a dedicated Junior Software Engineer with over 1 years of experience in building responsive and user-friendly web applications. My passion for coding drives me to continuously learn and improve my skills. I enjoy working on challenging projects and collaborating with cross-functional teams to create impactful digital solutions.",
};

// images for projects
import agency1 from "../../assets/projects/agency1.png";
import agency2 from "../../assets/projects/agency2.png";
import agency3 from "../../assets/projects/agency3.png";
import agency4 from "../../assets/projects/agency4.png";

import boighor1 from "../../assets/projects/boighor1.png";
import boighor2 from "../../assets/projects/boighor2.png";
import boighor3 from "../../assets/projects/boighor3.png";
import boighor4 from "../../assets/projects/boighor4.png";
import boighor5 from "../../assets/projects/boighor5.jpeg";
import boighor6 from "../../assets/projects/boighor6.png";

import ocseo1 from "../../assets/projects/ocseo1.png";
import ocseo2 from "../../assets/projects/ocseo2.png";
import ocseo3 from "../../assets/projects/ocseo3.png";

export const projectData = [
  {
    id: 1,
    projectNumber: "01",
    title: "Eden Birds - Software Firm Website",
    description:
      "A professionally designed and fully responsive website built for Birds of Eden, a software firm, using React.js and Tailwind CSS. The project focuses on clean UI/UX, modern web standards. Due to security concerns, the GitHub repository is private. visit the vercel-link below for the demo .",
    technologies: ["React.js", "Tailwind CSS"],
    images: [agency1, agency2, agency4, agency3],
    liveLink: "https://eden-birds.vercel.app/",
    repoLink: "#",
  },

  {
    id: 2,
    projectNumber: "02",
    title: "Birds of Eden - Admin Dashboard for CRUD Operations",
    description:
      "A simple yet effective admin dashboard created for Birds of Eden, designed to manage sections such as logos, technology, blogs, services, products, team members, career pages, and contact forms. Built with React.js and Tailwind CSS, it fetches data from a Django backend API for seamless CRUD operations. The project is still in development, and due to security concerns, the GitHub repository remains private.",
    technologies: ["React.js", "Tailwind CSS", "Django API"],
    images: [agency1, agency2, agency4, agency3], // Replace with actual image variables
    liveLink: "https://dashboard-project.vercel.app/", // Replace with actual live link
    repoLink: "#", // Replace with actual GitHub repo link
  },
  {
    id: 3,
    projectNumber: "03",
    title: "Boighor - Islamic Book Platform",
    description:
      "Boighor is a platform being developed for an Islamic institution where users can read Islamic books for free or purchase them if they choose. The frontend is built using React.js and Tailwind CSS, while the backend is powered by Django Rest Framework to manage the book catalog, user interactions, and transactions. The project aims to make Islamic literature accessible to everyone. Currently, it is in the development phase, with a focus on providing a user-friendly and seamless experience for readers and buyers alike.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Django Rest Framework",
      "JavaScript",
    ],
    images: [boighor1, boighor6, boighor2, boighor3, boighor4, boighor5], // Replace with actual image variables
    liveLink: "#", // To be added upon completion
    repoLink: "#", // GitHub repository will remain private due to security reasons
  },

  {
    id: 4,
    projectNumber: "04",
    title: "OCSEO - Proof of Concept for SEO Management",
    description:
      "OCSEO is a proof of concept developed for a USA-based client to manage SEO-related tasks. The project is built using React.js and Tailwind CSS, following Figma designs provided by the client. This project focuses on creating a functional, visually appealing SEO management platform to help businesses optimize their online presence effectively. The development aims to ensure a clean and responsive UI for a seamless user experience.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    images: [ocseo1, ocseo2, ocseo3], // Replace with actual image variables
    liveLink: "#", // To be added upon completion
    repoLink: "#", // GitHub repository may remain private depending on client needs
  },
];

//contact
export const contactData = {
  email: "zisan19393871@gmail.com",
  phone: "01793-874189",
};

//services

// Import the necessary icon
import { BsArrowDownRight } from "react-icons/bs";

export const servicesData = [
  {
    id: 1,
    title: "Frontend Development with React JS & Tailwind",
    icon: <BsArrowDownRight size={24} />,
    description:
      "Building responsive and interactive UIs with React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "API Development with Django",
    icon: <BsArrowDownRight size={24} />, // Custom Django Icon used here
    description: "Creating scalable and secure RESTful APIs using Django.",
  },
  {
    id: 3,
    title: "API Development with Spring Boot",
    icon: <BsArrowDownRight size={24} />,
    description: "Building enterprise-level backend services with Spring Boot.",
  },
  {
    id: 4,
    title: "UI/UX design",
    icon: <BsArrowDownRight size={24} />,
    description: "UI/UX design using Figma",
  },
];
