import React from 'react'
import Testimonial_cards from './Testimonial_cards'

const Testimonials = () => {
  return (
    <section className="bg-secondary py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-background text-center mb-10">What people are saying</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Testimonial 1 */}
                    <Testimonial_cards picture={"https://i.pravatar.cc/100?img=1"} name="-Sarah J" description="
                    Life-changing! Trackify helped me finally get my finances in order. Highly recommended!"
                    />
                    
                    {/* Testimonial 2 */}
                    <Testimonial_cards picture={"https://i.pravatar.cc/100?img=2"} name="- Michael R" description="
                    I love how user-friendly Trackify is! It's made budgeting actually enjoyable."  />
                    
                    {/* Testimonial 3 */}

                    <Testimonial_cards picture={"https://i.pravatar.cc/100?img=3"} name="-john doe" description="I've saved hundreds of dollars by easily canceling subscriptions I didn't even know I had. Thanks, Trackify!" />
                    
                </div>
            </div>
        </section>
  )
}

export default Testimonials