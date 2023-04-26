import React from 'react'

export default function Card({props}) {
  return (
    <div className="card">
        <div className="cardBody">{props.name}</div>
    </div>
  )
}
