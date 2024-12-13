import { appContext } from '../App'
import React, { useContext } from 'react'

export default function Filter({filter}) {
  const {filters, setFilters} = useContext(appContext)
  function removeFilter(){
    const newFilters = filters.filter(f => f != filter)
    setFilters(newFilters);
  }
  return (
    <div className='filter'>
      {filter}
      <button onClick={removeFilter}><img src="/images/icon-remove.svg" alt="remove icon" /></button>
    </div>
  )
}
