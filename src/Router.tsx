import { Routes, Route } from "react-router-dom"

import { Login } from "./pages/Login"
import { DefaultLayout } from "./pages/layouts/DefaultLayout"
import { StepLayout } from "./pages/layouts/StepLayout"
import { Team } from "./pages/Team"
import { TeamLayout } from "./pages/layouts/TeamLayout"


export function Router() {
  return (
    <Routes>

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/teams" element={<StepLayout />} />
      </Route>

      <Route path="/teams/team/:id" element={<TeamLayout />}>
        <Route path="/teams/team/:id" element={<Team />} />
      </Route>

    </Routes>
  )
}