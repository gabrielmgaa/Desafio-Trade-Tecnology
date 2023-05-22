import { styled } from "styled-components";

export const StepLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  max-width: 80rem;
  min-height: 60vh;
  width: 95%;
  margin: auto;
  padding: 2rem 2.5rem;
  background: #fff;
  border-radius: 4px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.4rem;
  margin-top: 4rem;
  
  button[type="button"]{
    padding: 0.8rem 1.5rem;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  button[type="button"]:disabled{
    cursor: not-allowed;
  }
`