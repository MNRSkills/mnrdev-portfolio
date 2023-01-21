import styled from "styled-components";

export const StyledJumbo = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;
    justify-content: center;
    align-items: center;
  }

  ul li {
    padding: 10px;
  }
`;
