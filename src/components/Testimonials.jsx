import React from 'react'
import Testimonial_cards from './Testimonial_cards'

const Testimonials = () => {
  return (
    <section className="bg-secondary py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-background text-center mb-10">What people are saying</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Testimonial 1 */}
                    <Testimonial_cards picture={"https://i.pravatar.cc/100?img=1"} name=">Kenzie Edgar." description="
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel." />
                    
                    {/* Testimonial 2 */}
                    <Testimonial_cards picture={"https://i.pravatar.cc/100?img=2"} name="Stevie Tifft." description="
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel." />
                    
                    {/* Testimonial 3 */}

                    <Testimonial_cards picture={"https://i.pravatar.cc/100?img=3"} name="Tommie Ewart." description="
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel." />
                    
                </div>
            </div>
        </section>
  )
}

export default Testimonials