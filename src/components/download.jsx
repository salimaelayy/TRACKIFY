import React from 'react'
import android from "../assets/android.png"
import ios from "../assets/ios.png"
import Mockup from "../assets/mockup.png"

const Download = () => {
  return (
    <div>
        <section className="bg-gray-200 py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
                <div className="md:w-1/2">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Download Trackify</h2>
                        <h4>Manage your assets more conveniently.</h4>
                        <div className="md:w-1/2 py-5 flex ">
                            <img src={android} alt="Download on the App Store" className="w-40"/>
                            <img src={ios} alt="Get it on Google Play" className="w-40 ml-4"/>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline">
                            Download Now
                        </button>
                    </div> 
                </div>
                <div className="md:w-1/2">
                    <img src={Mockup} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Download