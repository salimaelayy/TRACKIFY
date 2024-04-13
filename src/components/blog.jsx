import React from 'react'

const Blog = () => {
  return (
    <div>
        <section className="bg-primary py-16 h-screen flex items-center">
            <div className="container mx-auto px-8">
            {/* Blog posts */}
            <h2 className="text-3xl text-background font-bold mb-8 text-center">Latest Blog Posts</h2>
            <div className="grid grid-cols-3 gap-8">
                {/* Sample blog post cards */}
                <div className="bg-background rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Title of Blog Post</h3>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec felis eu velit aliquet...</p>
                </div>
                <div className="bg-background rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Title of Blog Post</h3>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec felis eu velit aliquet...</p>
                </div>
                <div className="bg-background rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Title of Blog Post</h3>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec felis eu velit aliquet...</p>
                </div>
                {/* Repeat for more blog posts */}
            </div>
            </div>
        </section>
    </div>
  )
}

export default Blog