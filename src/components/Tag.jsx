import { appContext } from '../App';
import React, { useContext } from 'react'


export default function Tag(props) {
  const {tag} = props;
  const {filters, setFilters} = useContext(appContext)
  function handleClick(){
    if (filters.includes(tag)) return;
    const newfilters = [...filters, tag];
    setFilters(newfilters)
  }
  return (
    <span className='tag' onClick={handleClick}>
      {tag}
    </span>
  )
}
