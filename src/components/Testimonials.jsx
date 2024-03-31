import React from 'react'

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">What people are saying</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Testimonial 1 */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white border border-gray-200 p-5 text-gray-800 font-light rounded-lg mb-6">
                            <div className="flex mb-4 items-center">
                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="Avatar"/>
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                            </p>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white border border-gray-200 p-5 text-gray-800 font-light rounded-lg mb-6">
                            <div className="flex mb-4 items-center">
                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=2" alt="Avatar"/>
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                </div>
                            </div>
                            <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                            </p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white border border-gray-200 p-5 text-gray-800 font-light rounded-lg mb-6">
                            <div className="flex mb-4 items-center">
                                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=3" alt="Avatar"/>
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                </div>
                            </div>
                            <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Testimonials