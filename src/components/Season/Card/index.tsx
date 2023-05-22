import { ChangeEvent } from "react"
import { Card as CardBox } from "./styles";

interface CardProps {
  season: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Card({ season, handleChange }: CardProps) {
  return (
      <CardBox>
        <input type="radio" name="season" id={season} value={season} onChange={handleChange} />
        <label htmlFor={season}>{season}</label>
      </CardBox>
  )
}