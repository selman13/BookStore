"use client"
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import Search from './Search'
import Link from 'next/link'
import Basket from '../common/Basket'
import { MdFavorite } from 'react-icons/md'

const MobileNav = () => {

    const [showNav, setShowNav] = useState(false)

  return (
    <div onClick={() => setShowNav(!showNav)} className='cursor-pointer'>

{showNav ? (
        <CgClose 
          onClick={() => setShowNav(false)} 
          className='flex md:hidden text-white cursor-pointer' size={25}
        />
      ) : (
        <FaBars 
          onClick={() => setShowNav(true)} 
          className='flex md:hidden text-white cursor-pointer' size={20}
        />
      )}
        
        {
           showNav && 
            <div className='absolute top-12 left-0 w-full bg-red-800 text-white p-4 md:hidden'>
            <div className='gap-5 flex flex-col'>
               
                <Search/>
               <Link href="/books">Kitablar</Link>
               
                <Link href="/basket"><Basket/></Link>
               
                <Link href="/favorite"><MdFavorite size={25}/></Link>
               
                <Link href="/contact">Giriş</Link>

            </div>
            </div>
        }
    </div>
  )
}

export default MobileNav