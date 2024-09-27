import React from 'react'

function HeaderBox({ type, title, user, description }: HeaderBoxProps) {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
            <span className="text-bankGradient">
                {`Welcome ${user}, let's start holding your crypto!`}
            </span>
        </h1>    
        )}
    </div>
  )
}

export default HeaderBox