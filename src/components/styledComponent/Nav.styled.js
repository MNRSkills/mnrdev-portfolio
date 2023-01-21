import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 4em;
    margin: 0;
    margin-left: 4rem;
  }

  ul {
    padding: 0 40px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
  }

  ul li {
    padding: 10px;
    list-style: none;
    font-size: 3em;
  }
`;
