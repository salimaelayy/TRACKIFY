import React from 'react'
import Featured_Card from './Featured_Card.jsx'


const KeyFeatures = () => {
  return (
    <><section className="bg-background py-20">
    <div className="container mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
        <p className="text-lg text-gray-600">Discover the powerful features that Buddy offers to streamline your development process.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature Card */}
        <Featured_Card heading="Continuous Integration" image="/feature2-icon.svg" description={"Ensure code quality and reduce bugs by automatically running tests and checks for every commit."}/>
        {/* Feature Card */}
        <Featured_Card heading="Code Review" image="/feature3-icon.svg" description={"Collaborate effectively with your team by reviewing code changes and providing feedback directly in the pipeline."}/>
        {/* Feature Card */}
        
        <Featured_Card heading={'Environment Management'} description={'Easily manage multiple environments such as staging, production, and development with customizable configurations.'}/>
        {/* Feature Card */}
        <Featured_Card heading="Collaborative Development" image="/feature1-icon.svg" description={"Collaborate with your team and share code changes directly in the pipeline."}/>
      </div>
    </div>
  </section></>
  )
}

export default KeyFeatures