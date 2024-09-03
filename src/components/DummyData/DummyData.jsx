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
import project1Img1 from "../../assets/projects/django.jpg";
import project1Img3 from "../../assets/projects/figma.jpg";
import project1Img2 from "../../assets/projects/git.jpg";

import {
  default as project2Img1,
  default as project2Img2,
  default as project2Img3,
} from "../../assets/projects/figma.jpg";

import {
  default as project3Img1,
  default as project3Img2,
  default as project3Img3,
} from "../../assets/projects/git.jpg";

export const projectData = [
  {
    id: 1,
    projectNumber: "01",
    title: "Frontend Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    technologies: ["Html 5", "Css 3", "Javascript"],
    images: [project1Img1, project1Img2, project1Img3],
    liveLink: "#", // Replace with actual live link
    repoLink: "#", // Replace with actual GitHub repo link
  },
  {
    id: 2,
    projectNumber: "02",
    title: "Fullstack Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    technologies: ["Next.js", "Tailwind.css", "Node.js"],
    images: [project2Img1, project2Img2, project2Img3],
    liveLink: "#", // Replace with actual live link
    repoLink: "#", // Replace with actual GitHub repo link
  },
  {
    id: 3,
    projectNumber: "03",
    title: "Frontend Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    technologies: ["Next.js", "Tailwind.css"],
    images: [project3Img1, project3Img2, project3Img3],
    liveLink: "#", // Replace with actual live link
    repoLink: "#", // Replace with actual GitHub repo link
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
    title: "Frontend Development with React JS, Next JS & Tailwind",
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
