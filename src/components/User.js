import React from 'react'

const User = ({name}) => {
  return (
    <div className='user-card'>
        <h1>name: {name}</h1>
      <h2>location: Ahmedabad</h2>
      <h3>contact: @srshah07</h3>

    </div>
  )
}

export default User