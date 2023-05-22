import { styled } from "styled-components"


export const Card = styled.div`
  padding: 1.5rem;
  box-shadow: 0px 1px 4px 0px #242424;
  border-radius: 4px;
  cursor: pointer;

  transition: transform 0.4s;

  &:hover{
    transform: translateY(-10px);
  }
`