import Header from "./components/Header"
import Main from "./components/Main"
import jobs from './data.json'
import { useState, createContext } from "react"


export const appContext = createContext();

function App() {
  const [filters, setFilters] = useState([]);

  return (
    <div className="wrapper">
      <appContext.Provider value={{filters, setFilters}}>
        <Header></Header>
        <Main jobs={jobs}></Main>
      </appContext.Provider>
    </div>
  )
}

export default App
