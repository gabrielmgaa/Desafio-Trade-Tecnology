import { Link } from "react-router-dom"

import { Card as CardBox } from "./styles"

interface CardProps {
  id: number
  name: string
  logo: string
  // handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}


export function Card({ id, name, logo }: CardProps) {


  return (
    <CardBox>
      <img src={logo} alt="" />
      <span>{name}</span>
      <Link to={`team/${id}`}>Acessar Detalhes</Link>
    </CardBox>
  )
}