import React, { useContext } from 'react'
import Job from '../components/JobCard'
import { appContext } from '../App'


export default function main({jobs}) {
  const {filters} = useContext(appContext);
  return (
    <main>
      <div className='jobs-container'>
        {(filters.length > 0? jobs.filter(job => {
          const {role, level, languages, tools} = job;
          const tags = [role, level, ...languages, ...tools];
          return filters.every(filter => {
            return tags.includes(filter)
          })}) : jobs).map((job, i) => {
          return <Job key={i} job={job}></Job>
        })}
      </div>
    </main>
  )
}
