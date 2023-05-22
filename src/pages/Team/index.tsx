import { useEffect, useContext, useState } from 'react'

import { useParams } from "react-router-dom"

import { AppContext } from '../../contexts/AppContext'

import { api } from '../../lib/axios'

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

export function Team() {
  const [team, setTeam] = useState<Team>()

  const { id } = useParams()

  const { params, apiKey } = useContext(AppContext)

  useEffect(() => {
    api(`/teams/statistics?league=${params.league}&season=${params.season}&team=${id}`, {
      headers: {
        "x-rapidapi-key": `${apiKey}`
      }
    })
      .then(res => setTeam(res.data.response))
  }, [params, id, apiKey])  

  console.log(id)
  console.log(team)

  return (
    <>
      <h1>Team</h1>

      {
        team?.lineups.sort((a,b) => {
          return (b.played - a.played)
        })[0]
      }

      <p>{team?.fixtures.played.total}</p>
      <p>{team?.fixtures.wins.total}</p>
      <p>{team?.fixtures.loses.total}</p>
      <p>{team?.fixtures.draws.total}</p>

    </>
  )
}