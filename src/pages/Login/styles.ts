import { styled } from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 50.5rem;
  width: 95%;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
`

export const FormContainer = styled.div`
  text-align: center;
  background-color: #fff;
  color: ${props => props.theme.background};
  padding: 2.5rem 1.2rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  gap: 0.4rem;

  h1{
    font-size: 2.8rem;
  }

`

export const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 70%;
  margin: 1rem auto;
  background-color: #EEF2F3;
  padding: 0.5rem;
  border-radius: 4px;
  color: #121214;

  input{
    width: 100%;
    border-radius: 4px;
    background-color: #EEF2F3;
    border: 0;
    outline: none;
    padding: 0.8rem 0.4rem;
    font-size: 1.4rem;
    color: #1C123B;
    font-weight: 600;
  }

  input::placeholder{
    color: #1C123B;
  }
`

export const Button = styled.button`
  width: 30%;
  margin-top: 1.2rem;
  padding: 1rem 0.8rem;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  border: 1px solid ${props => props.theme.background};
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-weight: 600;
  transition: background-color 0.4s, color 0.4s;

  &:hover{
    background-color: transparent;
    color: ${props => props.theme.background};
  }
`