import React from 'react'

function HeaderBox({ type, title, user, description }: HeaderBoxProps) {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (<span className="text-bankGradient">&nbsp;{user}</span>)}
      </h1>
      <p className="header-box-subtext">{description}</p>
    </div>
  )
}


export default HeaderBox