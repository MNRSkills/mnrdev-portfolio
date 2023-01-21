import styled from "styled-components";

export const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1{
    font-weight: 900;
    font-size: 3.5em;
    padding: 10px 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    max-width: 50%;
  }

  label {
    width: 100%;
    color: white;
    text-align: left;
    margin-left: 1.5em;
    padding: 2em;
  }

  input {
    padding: 20px;
    width: 100%;
    border-bottom: 2px #fcfcfc;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: #eee;
    background: transparent;
    color: white;

    &:focus{
        outline: none;
    }
  }




  textarea {
    padding: 20px;
    width: 100%;
    border-bottom: 2px #fcfcfc;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: #eee;
    background: transparent;

    &:focus{
        
    }
  }

  button{
    background: transparent;
  }
`;
