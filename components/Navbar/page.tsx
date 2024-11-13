import React from 'react'
import Time from '../common/Time'
import Slogan from '../common/Slogan'
import Language from '../common/Language'
import Font from '../common/Font'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between p-3 gap-3 md:gap-10 items-center bg-black text-white'>
        <Time/>
        <Slogan/>
        <div className='flex gap-5'>
        <Font/>
        <Language/>
        </div>
    </div>
  )
}

export default Navbar