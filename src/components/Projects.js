import React, { useState, useEffect } from "react";
import Card from "./Card";

import { StyledProjects } from "./styledComponent/Projects.styled";
import { createClient } from "contentful";

const Projects = () => {
  const [projects, setProject] = useState([]);
  const { REACT_APP_MY_API_KEY, REACT_APP_SPACE_ID } = process.env;
  console.log(process.env)
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_MY_API_KEY,
    // host: "cdn.contentful.com"
  });

  const getProjects = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      setProject(res.items);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <StyledProjects>
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </StyledProjects>
  );
};

export default Projects;
