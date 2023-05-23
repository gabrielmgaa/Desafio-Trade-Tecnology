import { useEffect, useContext, useState } from 'react'

import { Card } from './Card';
import { Card as CardBox } from './Card/styles';

import { AppContext } from '../../contexts/AppContext';

import { api } from '../../lib/axios';

import { GridCard, TeamsContainer } from "./styles";
import { Link } from 'react-router-dom';

interface PropsTeamsState {
  id: number,
  name: string
  logo: string
}

interface Teams {
  team: PropsTeamsState
}

export function Teams() {
  const [teams, setTeams] = useState<Teams[]>([])

  const { params, apiKey } = useContext(AppContext)

  useEffect(() => {
    api(`/teams?country=${params.country}&league=${params.league}&season=${params.season}`, {
      headers: {
        "x-rapidapi-key": `${apiKey}`
      }
    })
      .then(res => setTeams(res.data.response))
  }, [apiKey, params])

  return (
    <TeamsContainer>
      <h1>Teams</h1>

      <GridCard>
        {teams.map(team => (
          <Card
            key={team.team.id}
            id={team.team.id}
            name={team.team.name}
            logo={team.team.logo}
          />
        ))}

        <CardBox>
          <img src="" alt="" />
          <span>Corinthians</span>
          <Link to={`team/131`}>Acessar Detalhes</Link>
        </CardBox>

      </GridCard>
    </TeamsContainer>
  )
}