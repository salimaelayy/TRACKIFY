import React from 'react'

const Buttons = ({ classname,buttontext}) => {
  return (
    <div className="flex justify-center my-4">
        <button className={classname}>{buttontext}</button>
    </div>
  )
}

export default Buttons