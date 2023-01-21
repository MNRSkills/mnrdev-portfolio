import styled from "styled-components";

export const StyledProjects = styled.div`
  h1 {
    font-weight: 700;
    border-bottom: 2px solid green;
  }
  .project-grid {
    color: white;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }

  .card {
    background: #2A2728;
    padding: 50px 0;

    img {
      max-width: 600px;
      border-radius: 10% 1% 10% 1%;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
