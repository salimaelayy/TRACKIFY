import React from 'react'

const KeyFeatures = () => {
  return (
    <><section className="bg-gray-100 py-20">
    <div className="container mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
        <p className="text-lg text-gray-600">Discover the powerful features that Buddy offers to streamline your development process.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/feature1-icon.svg" alt="Feature 1" className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Automated Deployments</h3>
          <p className="text-gray-600">Streamline your deployment process with automated pipelines that push code to any server, cloud, or Kubernetes cluster.</p>
        </div>
        {/* Feature Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/feature2-icon.svg" alt="Feature 2" className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Continuous Integration</h3>
          <p className="text-gray-600">Ensure code quality and reduce bugs by automatically running tests and checks for every commit.</p>
        </div>
        {/* Feature Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/feature3-icon.svg" alt="Feature 3" className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Code Review</h3>
          <p className="text-gray-600">Collaborate effectively with your team by reviewing code changes and providing feedback directly in the pipeline.</p>
        </div>
        {/* Feature Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/feature4-icon.svg" alt="Feature 4" className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Environment Management</h3>
          <p className="text-gray-600">Easily manage multiple environments such as staging, production, and development with customizable configurations.</p>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default KeyFeatures