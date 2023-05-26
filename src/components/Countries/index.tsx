import { useEffect, useState, useContext, ChangeEvent } from "react"

import { AppContext } from "../../contexts/AppContext"

import { CountriesContainer, Spinner } from "./styles"

import { api } from "../../lib/axios"

interface ContriesProps {
  name: string
  code: string
}

export function Countries() {
  const [countries, setCountries] = useState<ContriesProps[]>([])

  const { params, apiKey, handleSetParams } = useContext(AppContext)

  useEffect(() => {
    api.get('/countries', {
      headers: {
        "x-rapidapi-key": `${apiKey}`
      }
    }).then(res => {
      setCountries(res.data.response)
    })
  }, [])

  function handleAddCountry(e: ChangeEvent<HTMLSelectElement>) {
    handleSetParams("country", e.target.value)
  }

  return (
    <CountriesContainer>
      <h1>Selecione o País</h1>

      {countries.length === 0 ? (
        <Spinner />
      ) : (
          <select name="country" id="country" onChange={handleAddCountry} defaultValue="">
            <option disabled value="">Selecione um país</option>
            {
              countries.map(country => (
                <option  value={country.name} key={country.name}>{country.name}</option>
              ))
            }
          </select>
      )}
    </CountriesContainer>
  )
}