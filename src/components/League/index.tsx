import { useEffect, useContext, useState, ChangeEvent } from 'react'
import { api } from '../../lib/axios'
import { AppContext } from '../../contexts/AppContext'
import { GridCard, LeagueContainer } from './styles'
import { Card } from './Card'

import { Card as CardBox } from './Card/styles'

interface props {
  id: number
  logo: string
  name: string
}

interface Leagues {
  league: props
}

export function League() {
  const [leagues, setLeagues] = useState<Leagues[]>([])
  const { params, apiKey, handleSetParams } = useContext(AppContext)

  useEffect(() => {
    api.get(`/leagues?country=${params.country}&season=${params.season}`, {
      headers: {
        "x-rapidapi-key": `${apiKey}`
        // 85f8e73bb5f24f003fb2a0811e6c888e
      }
    })
      .then(res => setLeagues(res.data.response))
  }, [apiKey, params])

  function handleAddLeague(e: ChangeEvent<HTMLInputElement>) {
    handleSetParams("league", e.target.value)
  }

  return (
    <LeagueContainer>
      <h1>League</h1>

      <GridCard>
        {leagues.map(league => (
          <Card
            key={league.league.id}
            id={league.league.id}
            name={league.league.name}
            logo={league.league.logo}
            handleChange={handleAddLeague}
          />
        ))}

        {/* <CardBox>
          <img src="https://media-2.api-sports.io/football/leagues/71.png" alt="" />
          <input type="radio" name="changed" id="71" value="71" onChange={handleAddLeague} />
          <label htmlFor="71">Serie A</label>
        </CardBox>
        <CardBox>
          <img src="https://media-2.api-sports.io/football/leagues/72.png" alt="" />
          <input type="radio" name="changed" id="72" value="72" onChange={handleAddLeague} />
          <label htmlFor="72">Serie B</label>
        </CardBox>
        <CardBox>
          <img src="https://media-2.api-sports.io/football/leagues/73.png" alt="" />
          <input type="radio" name="changed" id="73" value="73" onChange={handleAddLeague} />
          <label htmlFor="73">Copa do Brasil</label>
        </CardBox> */}

      </GridCard>


    </LeagueContainer>
  )
}