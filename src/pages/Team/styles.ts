import { styled } from "styled-components";

export const Grid = styled.div`
  width: 95%;
  max-width: 130rem;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1.5rem;
`