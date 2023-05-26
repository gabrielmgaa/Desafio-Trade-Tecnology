import { useEffect, useContext, useState } from 'react'

import { useParams } from "react-router-dom"

import { AppContext } from '../../contexts/AppContext'

import { PlayerCard } from './PlayerCard'
import { api } from '../../lib/axios'

import { Grid } from './styles'
import { InfosTeamContainer } from './PlayerCard/styles'

interface Lineups {
  played: number
}

interface Team {
  lineups: Lineups[]
  fixtures: {
    played: {
      total: number
    }
    wins: {
      total: number
    }
    loses: {
      total: number
    }
    draws: {
      total: number
    }
  }
}

export interface PlayerParams {
  id: number
  age: number
  name: string
  nationality: string
}

interface Player {
  player: PlayerParams
}

export function Team() {
  const [team, setTeam] = useState<Team>()
  const [players, setPlayers] = useState<Player[]>([])

  const { id } = useParams()

  const { params, apiKey } = useContext(AppContext)

  useEffect(() => {
    async function getApiInfo() {
      const [responseTeam, responsePlayers] = await Promise.all([
        api.get(`/teams/statistics?league=${params.league}&season=${params.season}&team=${id}`, {
          headers: {
            "x-rapidapi-key": `${apiKey}`
          }
        }),
        api.get(`/players?season=${params.season}&league=${params.league}&team=${id}`, {
          headers: {
            "x-rapidapi-key": `${apiKey}`
          }
        }),
      ])
      setTeam(responseTeam.data.response)
      setPlayers(responsePlayers.data.response)
    }
    getApiInfo()
  }, [params, id, apiKey])

  const lineups = team?.lineups.sort((a, b) => {
    return (b.played - a.played)
  })[0]

  return (
    <>
      <h1>Team</h1>

      <Grid>
        {
          players.map(players => {
            return <PlayerCard
              key={players.player.id}
              name={players.player.name}
              age={players.player.age}
              nationality={players.player.nationality}
            />
          })
        }
      </Grid>



      <InfosTeamContainer>
        <h2>Formação mais utilizada:{lineups?.played}</h2>
        <p>Total de partidas:{team?.fixtures.played.total}</p>
        <p>Ganhas:{team?.fixtures.wins.total}</p>
        <p>Percas:{team?.fixtures.loses.total}</p>
        <p>Total:{team?.fixtures.draws.total}</p>
      </InfosTeamContainer>
    </>
  )
}