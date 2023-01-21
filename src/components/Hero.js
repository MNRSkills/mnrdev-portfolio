import React from "react";
import { StyledHeader } from "./styledComponent/Hero.styled";

const Hero = () => {
  return (
    <section>
      <StyledHeader>
        <div className="headshot">
          <div className="pitch">
            <h4>Subtitle with what I do!</h4>
            <p>Here to save the day!</p>
          </div>
          <img
            src="https://res.cloudinary.com/mackr/image/upload/v1651111417/uvmytvwlvldwj15c0l8h.png"
            alt="Headshot"
          />
        </div>
      </StyledHeader>
      {/* we need an image  */}
    </section>
  );
};

export default Hero;
