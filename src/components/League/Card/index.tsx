import { ChangeEvent } from "react"
import { Card as CardBox } from "./styles";

interface CardProps {
  id: number
  name: string
  logo: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Card({ id, name, logo, handleChange }: CardProps) {
  const StringfyId = String(id)
  console.log(name)
  return (
    <CardBox>
      <img src={logo} alt="" />
      <input type="radio" name="changed"  id={StringfyId} value={StringfyId} onChange={handleChange} />
      <label htmlFor={StringfyId}>{name}</label>
    </CardBox>
  )
}