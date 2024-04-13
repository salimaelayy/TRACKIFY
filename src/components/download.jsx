import React from 'react'
import android from "../assets/android.png"
import ios from "../assets/ios.png"
import Mockup from "../assets/mockup.png"
import ButtonAccent from '../pages/ButtonAccent'

const Download = () => {
  return (
    <div>
        <section className="bg-background py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
                <div className="md:w-1/2">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Download Trackify</h2>
                        <h4>Manage your assets more conveniently.</h4>
                        <div className="md:w-1/2 py-5 flex">
                            <img src={android} alt="Download on the App Store" className="w-40"/>
                            <img src={ios} alt="Get it on Google Play" className="w-40 ml-4"/>
                        </div>
                        
                        <div className="text-left"> {/* Added text-left class here */}
                          <ButtonAccent link="/login" classname={'bg-accent  hover:bg-yello text-secondary font-medium py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline'} buttontext={'Download Now'} />
                        </div>
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
