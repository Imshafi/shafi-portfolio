import React from "react";
import project from "../assets/images/appoinrment-1.jpg";
import "../assets/css/projects.css";

const Projects = (props) => {
  const projects = [
    {
      image: project,
      link: "https://school.careers360.com/schools/schools-in-india",
      heading: "School Listing Project",
      paragraph: 
        "Utilized HTML, CSS for UI as well as responsive Javascript and React js, Redux, Redux toolkit for Api Integration",
    },
    {
      image: project,
      link:"https://studyabroad.careers360.com/study-in-usa-cnhp",
      heading: "Study Abroad Detail Project",
      paragraph:
        "Users can find the details of colleges or universities which college they want in detail along with fee and facilities",
    },
  ];

  return (
    <div className="projects_main_blk">
      <div className="projects_sub_blk">
        {props?.isMobile ? (
          <h1>-------- Projects --------</h1>
        ) : (
          <h1>
            ------------------------- Projects ---------------------------
          </h1>
        )}
      </div>
      <div className="projects_explanation_main_blk">
        {projects?.map((obj, i) => (
          <div className="projects_explanation_blk" key={i}>
            <ul>
              <li>
                <a
                  href={obj?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects_explanation_sub_blk">
                    <img src={obj?.image} alt="no img" />
                    <h3>{obj?.heading}</h3>
                    <p>{obj?.paragraph}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
