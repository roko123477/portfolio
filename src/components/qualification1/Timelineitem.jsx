import React from 'react'

const Timelineitem = ({data}) => {
  return (
    <div className="timeline-item">
        <div className="timeline-item-content">
            
            <time>{data.date}</time>
            <h3>{data.location}</h3>
            <p>{data.description}</p>
            
            <span className="circle"> </span>
        </div>
    </div>
  )
}

export default Timelineitem