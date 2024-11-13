import React from 'react'
import Logo from '../common/Logo'
import Search from '../common/Search'
import Link from 'next/link'
import { MdFavorite } from 'react-icons/md'
import MobileNav from '../common/MobileNav'
import Basket from '../common/Basket'

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-3 md:gap-10 p-5 bg-red-800 text-white'>
        <div>
            <Logo/>
        </div>
            <div className='hidden md:flex flex-1 justify-center items-center gap-5'>
               <Search/>
                <Link href="/books">Kitablar</Link>
                <Link href="/basket"><Basket/></Link>
                <Link href="/favorite"><MdFavorite size={25}/></Link>
                <Link href="/contact">Giriş</Link>
            </div>
            <div className='flex md:hidden'>
                <MobileNav/>
            </div>
    </div>
  )
}

export default Header