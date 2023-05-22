import { ChangeEvent, FormEvent, useState, useContext } from 'react'

import { api } from '../../lib/axios';

import { Button, FormContainer, HeaderContainer, InputField, LoginContainer } from "./styles";
import { useNavigate } from 'react-router-dom';

import { Keyhole } from '@phosphor-icons/react'

import bgLogin from '../../assets/bg-login.png'
import { AppContext } from '../../contexts/AppContext';

export function Login() {
  const [apiKey, setApiKey] = useState("")
  const [warning, setWarning] = useState("")
  const navigate = useNavigate()

  const { handleSetApiKey } = useContext(AppContext)

  function handleLoginWithApiKey(e: FormEvent) {
    e.preventDefault()

    try {
      api.get('/countries', {
        headers: {
          "x-rapidapi-key": `${apiKey}`
        }
      })
        .then(res => {
          if (!res.data.errors.token) {
            navigate('/teams')
            handleSetApiKey(apiKey)
          }
          setWarning(res.data.errors.token)
        })
    } catch (error) {
      throw new Error('deu ruim')
    }

  }

  function handleChangeApiKey(e: ChangeEvent<HTMLInputElement>) {
    setApiKey(e.target.value)

  }

  return (
    <LoginContainer>
      <img src={bgLogin} alt="pessoas assistindo jogo de futebol" />

      <FormContainer>
        <HeaderContainer>
          <h1>Seja Bem Vindo</h1>
          <p>Informe sua chave de API para prosseguir</p>
        </HeaderContainer>
        <form onSubmit={handleLoginWithApiKey}>
          <InputField>
            <Keyhole size={32} />
            <input
              type="text"
              id="login"
              value={apiKey}
              onChange={handleChangeApiKey}
              placeholder="Coloque sua chave de API"
              required
            />
          </InputField>
          <Button type="submit">Enviar</Button>
        </form>
      </FormContainer>
      {!!warning && <p>API Key Inválida</p>}
    </LoginContainer>
  )
}