import React, {useContext} from 'react'
import { appContext } from '../App'
import Filter from './Filter'


export default function FiltersBar() {
  const {filters, setFilters} = useContext(appContext)
  function removeAllfilters(){
    setFilters([])
  }
  return (
    <div className='filters-bar'>
      <div className="filters">
        {filters.length > 0 && filters.map((filter, i) => <Filter key={i} filter={filter}></Filter>)}
      </div>
      <button className='clear-btn' onClick={removeAllfilters}>Clear</button>
    </div>
  )
}
