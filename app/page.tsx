import {
  FaAngular,
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiPostman,
  SiSpringboot,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const summary = `I am a motivated and detail-oriented software engineer with hands-on industry experience working on real-world applications. I enjoy problem-solving, writing clean and maintainable code, and collaborating effectively within team environments. I am eager to continue growing professionally and contribute to meaningful projects that create real value.`;

const skillCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript/> },  
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      {name:"Angular", icon: <FaAngular />},
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      {name:"Material UI", icon: <SiMui />},
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MSSQL", icon: <DiMsqlServer /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Swagger", icon: <SiSwagger /> },
    ],
  },
];

const projects = [
  {
    title: "Hotel management system",
    description:
      "Developed a full-stack hotel management system using Spring Boot, React, and MySQL to manage bookings, customers, and payments with secure authentication and scalable architecture.",
    tech: ["React", "Spring Boot", "MySQL", "Keycloak", "Docker"],
    github: "https://github.com/hotel-mgt-dev",
    // demo: "https://fleettrack-demo.vercel.app",
  },
  {
    title: "Multi-Modal Based Violent Content Detection of YouTube Sinhala Videos ",
    description:
      "Developed a system to analyze YouTube videos and comments to detect violent content using NLP and transformer-based models, integrating video, audio, and text data for improved classification accuracy.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/SuwanthaDarshana/youtube_comments_analyse",
    // demo: "https://devtasks.app",
  },
  {
    title: " Sales Web Application",
    description:
      "Developed a full-stack sales management system with a React-based frontend and a Spring Boot backend, enabling efficient handling of sales data and user authentication",
    tech: ["React", "Spring Boot", "MySQL", "MUI"],
  },
  {
    title: " EduLabs – Student Management System",
    description:
      "Experience efficiency with our Student Management System. It ensures seamless data management from enrollment to grading. Elevate your institution with this modern and user-friendly solution.",
    tech: ["Angular", "Spring Boot", "MySQL"],
    github: "https://github.com/SuwanthaDarshana/2nd-Year-Software-Project",
  },
  {
    title: " Secret Message Web App",
    description:
      "It's a secret message display site built with Node.js, MongoDB, and secured with Passport.js. Users can log in with their email and password or simply use their Google account for easy access. You can share your secrets or read messages from other users, making it a fun and interactive space for everyone.",
    tech: ["Node.js", "MongoDB", "Passport.js", "EJS"],
    github: "https://github.com/SuwanthaDarshana/Secret",
  },
  {
    title: " Gaming Web UI",
    description:
      "Dive into gaming excellence with our sleek and immersive web interface. Trending titles, seamless navigation, and stunning visuals await, enhancing your gaming journey. Elevate your experience with an interface designed for both style and functionality.",
    tech: ["Figma","JavaScript", "HTML", "CSS"],
    github: "https://github.com/SuwanthaDarshana/GameDevWeb",
    demo: "https://suwanthadarshana.github.io/GameDevWeb/#",
  },
];

const social = {
  email: "suwanthadarshana@gmail.com",
  github: "https://github.com/SuwanthaDarshana",
  linkedin: "https://www.linkedin.com/in/suwantha-darshana",
};

const education = [
  {
    title: "BSc (Hons) in Information Technology",
    institution: "University of Moratuwa",
    period: "2021 - 2025",
    details: "Focused on full-stack development, distributed systems, and secure software design.",
  },
   {
    title: "Diploma in Cyber Security & Ethical Hacking",
    institution: "SITC Campus ",
    period: "2023",
    details: "Completed a Diploma in Cyber Security, gaining knowledge in networking fundamentals, system security, and cyber risk awareness.",
  },
  {
    title: "G.C.E Advanced Level",
    institution: "Royal College , Polonnaruwa",
    period: "2016 - 2018",
    details: "Completed G.C.E. Advanced Level in the Mathematics Stream.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-14">
        <Hero
          name="Suwantha Darshana"
          role="Software Engineer / Full Stack Developer"
          tagline="I architect and build end-to-end web platforms that balance performance, accessibility, and maintainability—shaping resilient systems that grow with the business."
        />
        <About summary={summary} />
        <Education items={education} />
        <Skills categories={skillCategories} />
        <Projects projects={projects} />
        <Contact email={social.email} />
      </main>
      <Footer {...social} />
    </div>
  );
}
