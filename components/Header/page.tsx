import React from 'react'
import Logo from '../common/Logo'
import Search from '../common/Search'
import Link from 'next/link'
import { MdFavorite } from 'react-icons/md'
import MobileNav from '../common/MobileNav'
import Basket from '../common/Basket'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


const Header = () => {
  return (
    <div className='flex justify-between items-center gap-3 md:gap-10 p-5 bg-red-800 text-white'>
        <div>
           <Link href="/"> <Logo/></Link>
        </div>
            <div className='hidden md:flex flex-1 justify-center items-center gap-5'>
               <Search/>
                <Link href="/books">Kitablar</Link>
                <Link href="/basket"><Basket/></Link>
                <Link href="/favorite"><MdFavorite size={25}/></Link>
                <Link href="/contact">Əlaqə</Link>
                <SignedOut>
            <SignInButton>
            <Link href="/login">Giriş</Link>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
            </div>
            <div className='flex md:hidden'>
                <MobileNav/>
            </div>
    </div>
  )
}

export default Header