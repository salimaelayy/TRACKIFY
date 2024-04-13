import React from 'react'

const Featured_Card = ({heading, description, image}) => {
  return (
    <div className="bg-primary rounded-lg shadow p-6">
        <img src={image} alt="Feature 1" className="h-12 w-12 mx-auto mb-4" />
        <h3 className="text-lg text-background font-bold mb-2">{heading}</h3>
        <p className="text-background">{description}</p>
    </div> 
  )
}

export default Featured_Card