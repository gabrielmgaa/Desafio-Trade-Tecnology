import styled from 'styled-components'

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  select{
    padding: 0.8rem 1.5rem;
    margin: 1.5rem 0;
    /* width: 50%; */
  }
`

export const Spinner = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  margin: 2rem auto;
  border: 6px solid rgba(0,0,0,0.1);
  border-left-color: ${props => props.theme.background};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg)}
  }
`
