import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <section className="flex-start flex-col mb-16">
            <h1>Categories</h1>
            <h1><Link href='todos'>Todos</Link></h1>
            <h1>Load More</h1>
        </section>
    )
}

export default Home