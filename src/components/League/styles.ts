import { styled } from "styled-components";

export const LeagueContainer = styled.div`
  text-align: center;
`

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
  grid-gap: 2rem;
  margin-top: 8rem;
`