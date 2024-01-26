import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center gap-5 flex-col'>
            <h1 className='text-[#333]'>We Can't Find The Todo You'r Looking For..</h1>
            <Link href='/' className='main-btn w-[100px] h-[40px] rounded-lg text-white leading-[40px] text-center'>Back To Home</Link>
        </div>
    )
}

export default NotFound