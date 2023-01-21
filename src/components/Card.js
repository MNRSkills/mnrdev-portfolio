import React from "react";
import { StyledProjects } from "./styledComponent/Projects.styled";

const Card = ({ item }) => {
  const { title, description, thumbnailUrl } = item.fields;
  const { url } = thumbnailUrl.fields.file;
  console.log(url)
  return (
    <div className="card">
      <img src={url} alt="Thumbnail" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
