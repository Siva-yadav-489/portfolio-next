import React from "react";
import Heading from "./heading";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import frontend from "/public/frontend/5.png";
import bookmyshow from "/public/bookmyshow/Screenshot (643).png";
import proposal from "/public/proposal/Screenshot (642).png";
import airbnb from "/public/airbnb/listings.png";

const projects = [
  {
    title: "Frontend Showcases",
    description:
      "Developed and showcased multiple cloned websites to demonstrate frontend expertise, focusing on clean design patterns, reusable components, structured routing and smooth animations with Motion.",
    techstack: "Next.js, TypeScript, Tailwind CSS, Motion.dev",
    image: frontend,
    github: "https://github.com/Siva-yadav-489/frontend-library",
    liveUrl:
      "https://frontend-library-nl2u-siva-yadav-489s-projects.vercel.app/",
  },
  {
    title: "BookMyShow Clone",
    description:
      "Built a basic ticket bookmyshow clone in a 1-day hackathon with features like movies listing and ticket booking(just confirmation).",
    techstack: "Node.js, Express.js, React.js, Tailwind CSS.",
    image: bookmyshow,
    github: "https://github.com/Siva-yadav-489/bookmyshow-client",
    liveUrl: "https://bookmyshow-client-8p8g.vercel.app/",
  },
  {
    title: "AI Proposal Generator & Chatbot",
    description:
      "Built an AI-powered tool using Gemini SDK to generate software project proposals with a chatbot interface, exporting to PDF via PDFKit and sharing through email via Nodemailer.",
    techstack:
      "React.js, Node.js, Express.js, Gemini SDK, PDFKit, Nodemailer, Tailwind CSS",
    image: proposal,
    github: "https://github.com/Siva-yadav-489/code-crafters-react-frontend",
    liveUrl: "https://code-crafters-react-frontend.vercel.app/",
  },
  {
    title: "Staysphere(Airbnb clone)",
    description:
      "Developed a full-stack Airbnb clone with secure Passport.js auth, property listings, reviews, and image uploads via Multer + Cloudinary.",
    techstack:
      "Node.js, Express.js, MongoDB Atlas, EJS, Passport.js, Cloudinary, Multer, Bootstrap.",
    image: airbnb,
    github: "https://github.com/Siva-yadav-489/StaySphere-MajorProject",
    liveUrl: "https://staysphere-majorproject.onrender.com/listings",
  },
];
const Projects = () => {
  return (
    <div>
      <Heading heading="Projects" />
      <div className="grid max-[900px]:grid-cols-1 grid-cols-2">
        {projects.map((project, i) => (
          <ThreeDCardDemo
            key={i}
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            image={project.image}
            github={project.github}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
