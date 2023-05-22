import { styled } from "styled-components"


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  box-shadow: 0px 1px 4px 0px #242424;
  border-radius: 4px;

  transition: transform 0.4s;

  input,label{
    cursor: pointer;
  }

  img{
    width: 20rem;
    height: 20rem;
    margin: auto;
  }

  &:hover{
    transform: translateY(-10px);
  }
`