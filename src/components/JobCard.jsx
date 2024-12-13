import React from 'react'
import Tag from './Tag';

export default function JobCard(props) {
  const {job} = props;
  const {featured, logo, company, position, postedAt, contract, location, role, level, languages, tools} = job;
  return (
    <div className={`job ` + (featured? "featured": "")}>
      <div className="job-icon">
        <img src={logo.slice(2)} alt="job logo" />
      </div>
      
      <div className="job-info">
        <div className='company'>
          <p className='company-name'>{company}</p>
          {job.new && <p className='job-new'>NEW!</p>}
          {featured && <p className='job-featured'>FEATURED</p>}
        </div>
        <div className='job-name'>
          {position}
        </div>
        <div className='job-details'>
          <p className='posted-at'>{postedAt}</p>
          <span className='point'></span>
          <p className='role'>{contract}</p>
          <span className='point'></span>
          <p className='posted-at'>{location}</p>
        </div>
      </div>
      <div className="job-tags">
        {[role, level, ...languages, ...tools].map((tag, i) => <Tag className='tag' key={i} tag={tag}></Tag>)}
      </div>
    </div>
  )
}
