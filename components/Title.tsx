import Link from 'next/link'
import React from 'react'

const Title = ({ title }: { title: string }) => {
    return (
        <div className='flex justify-start items-center gap-3 py-5'>
            <Link href="/" className='text-blueTheme'>Dashboard</Link>
            <span className='text-[#333] dark:text-white'>/</span>
            <span className='text-[#333] dark:text-white'>{title}</span>
        </div>
    )
}

export default Title