import React from 'react'

const Testimonial_cards = ({picture, name,description}) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-background border border-gray-200 p-5 text-gray-800 font-light rounded-lg mb-6">
            <div className="flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src={picture} alt="Avatar"/>
                </div>
                <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">{name}</h6>
                </div>
            </div>
            <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>{description}
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
            </p>
        </div>
    </div>
  )
}

export default Testimonial_cards