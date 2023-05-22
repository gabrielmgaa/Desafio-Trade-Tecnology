import { Outlet } from 'react-router-dom'
import { Wrapper } from './styles'

export function DefaultLayout(){
  return(
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}