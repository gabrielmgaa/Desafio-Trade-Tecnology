import { ChangeEvent, useEffect, useContext, useState } from "react"
import { api } from "../../lib/axios"

import { GridCard, SeasonsContainer } from "./styles"
import { AppContext } from "../../contexts/AppContext"
import { Card } from "./Card"


export function Season() {
  const [seasons, setSeasons] = useState<string[]>()

  const { handleSetParams } = useContext(AppContext)

  useEffect(() => {
    api.get(`/leagues/seasons`, {
      headers: {
        "x-rapidapi-key": "85f8e73bb5f24f003fb2a0811e6c888e"
      }
    })
      .then(res => setSeasons(res.data.response))
  }, [])

  function handleAddSeason(e: ChangeEvent<HTMLInputElement>) {
    handleSetParams("season", e.target.value)
  }


  return (
    <SeasonsContainer>
      <h1>Seasons</h1>

        <GridCard>
          {seasons?.map(season => (
            <Card
              key={season}
              handleChange={handleAddSeason}
              season={season}
            />
          ))}
        </GridCard>
        <input type="radio" name="changed" id="a" value="2019" onChange={handleAddSeason} />
        <label htmlFor="a">2019</label>
    </SeasonsContainer >
  )
}