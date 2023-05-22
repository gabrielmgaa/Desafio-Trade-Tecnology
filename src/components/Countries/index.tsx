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

  const { params, handleSetParams } = useContext(AppContext)

  // useEffect(() => {
  //   api.get('/countries', {
  //     headers: {
  //       "x-rapidapi-key": "d11ebc7cade227f3208d1ea7d54fb695"
  //     }
  //   }).then(res => {
  //     setCountries(res.data.response)
  //   })
  // }, [])

  function handleAddCountry(e: ChangeEvent<HTMLSelectElement>) {
    handleSetParams("country", e.target.value)
  }

  return (
    <CountriesContainer>
      <h1>Selecione o País</h1>

      {/* {countries.length === 0 ? (
        <Spinner />
      ) : (
          <select name="country" id="country" defaultValue="">
            <option disabled value="">Selecione um país</option>
            {
              countries.map(country => (
                <option onClick={handleAddCountry} value={country.name} key={country.name}>{country.name}</option>
              ))
            }
          </select>
      )} */}

      <select name="country" id="country" onChange={handleAddCountry} required defaultValue={params.country}>
        <option disabled value="">Selecione um país</option>
        <option value="brazil" key="brazil">Brazil</option>
        <option value="Estados Unidos" key="eua">Eua</option>
      </select>
    </CountriesContainer>
  )
}