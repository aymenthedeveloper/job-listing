import { useContext } from "react";
import FiltersBar from "./FiltersBar";
import { appContext } from "../App";


export default function Header({bg}) {
  const {filters} = useContext(appContext)
  return (
    <header>
      {filters.length > 0 && <FiltersBar></FiltersBar>}
    </header>
  )
}
