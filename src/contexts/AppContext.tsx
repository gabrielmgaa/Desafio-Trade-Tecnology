import { createContext, ReactNode, useState } from "react"

interface Params {
  country: string
  season: string
  league: number
}

type key = 'country' | 'season' | 'league'

interface AppContext {
  apiKey: string
  params: Params
  handleSetParams: (key: key, value: string) => void
  handleSetApiKey: (value: string) => void
}

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContext)

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [params, SetParams] = useState<Params>({
    country: "",
    season: "",
    league: 0
  })
  const [apiKey, setApiKey] = useState("")

  console.log(params);
  console.log(apiKey);

  function handleSetParams(key: key, value: string) {
    SetParams((prev) => {
      return {
        ...prev,
        [key]: value,
      }
    })
  }

  function handleSetApiKey(value: string) {
    setApiKey(value)
  }


  return (
    <AppContext.Provider value={{ handleSetParams, handleSetApiKey, params, apiKey }}>
      {children}
    </AppContext.Provider>
  )
}