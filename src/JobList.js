import React from "react";
import JobCard from "./JobCard";

// Import images
import dgCells from "./img/dgCells.png";
import google from "./img/google.png";
import igCells from "./img/igCells.png";
import meta from "./img/meta.png";
import metaCells from "./img/metaCells.png";
import microsoft from "./img/microsoft.png";
import msCells from "./img/msCells.png";
import ngCells from "./img/ngCells.png";
import paypalCells from "./img/paypalCells.png";
import razerCells from "./img/razerCells.png";
import riotCells from "./img/riotCells.png";
import valvleCells from "./img/valvleCells.jpg";
import ytbCells from "./img/ytbCells.png";
import amazon from "./img/amazon.png";

const jobs = [
  {
    title: "FullStack Developer",
    company: "Meta",
    description: "Work on cutting-edge web applications with frontend and backend technologies.",
    tags: ["FullStack", "Developer"],
    image: meta,
  },
  {
    title: "Web Developer",
    company: "Google",
    description: "Build and maintain responsive websites and applications.",
    tags: ["Web", "Developer"],
    image: google,
  },
  {
    title: "Frontend Developer",
    company: "Amazon",
    description: "Create user-friendly interfaces for e-commerce platforms.",
    tags: ["Frontend", "Developer"],
    image: amazon,
  },
  {
    title: "UI/UX Designer",
    company: "PayPal",
    description: "Design intuitive user interfaces for payment systems.",
    tags: ["UI/UX", "Designer"],
    image: paypalCells,
  },
  {
    title: "Software Engineer",
    company: "Microsoft",
    description: "Develop scalable software solutions for enterprise clients.",
    tags: ["Software", "Engineer"],
    image: microsoft,
  },
  {
    title: "Game Developer",
    company: "Riot Games",
    description: "Develop and maintain cutting-edge gaming experiences.",
    tags: ["Game", "Developer"],
    image: riotCells,
  },
  {
    title: "Backend Developer",
    company: "Valve",
    description: "Create efficient backend systems for gaming platforms.",
    tags: ["Backend", "Developer"],
    image: valvleCells,
  },
];

const JobList = () => {
  return (
    <div className="columns is-multiline">
      {jobs.map((job, index) => (
        <div key={index} className="column is-one-third">
          <JobCard
            title={job.title}
            company={job.company}
            description={job.description}
            tags={job.tags}
            image={job.image}
          />
        </div>
      ))}
    </div>
  );
};

export default JobList;
