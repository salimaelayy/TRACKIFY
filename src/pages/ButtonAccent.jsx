import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAccent = ({classname,buttontext, link}) => {
  return (
    <div className="flex justify-center my-4">
        <Link to={link} className={classname}>{buttontext} </Link>
        
    </div>
  )
}

export default ButtonAccent
