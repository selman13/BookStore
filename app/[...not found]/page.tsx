import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 bg-red-900 text-white font-bold text-3xl min-h-screen'>
        <h1>Opps...</h1>
        <h4>Axtardığınız səhifə mövcud deyil</h4>
        <div>
            <Link href="/" className='border border-solid p-2 bg-black rounded-md text-xl'>Əsas səhifəyə dönün</Link>
        </div>
    </div>
  )
}

export default NotFound