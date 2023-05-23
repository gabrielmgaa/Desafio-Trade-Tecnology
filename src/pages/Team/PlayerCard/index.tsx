import { PlayerCard as Card } from './styles'

interface PlayerCardProps {
  age: number
  name: string
  nationality: string
}

export function PlayerCard({ age, name, nationality }: PlayerCardProps) {
  console.log(age,name,nationality)
  return (
    <Card>
      <h1>{name}</h1>

      <span>{age}</span>
      <span>{nationality}</span>

    </Card>
  )
}