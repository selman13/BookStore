import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div className='flex items-center gap-3 flex-1'>
        <input type="search" placeholder='Axtarış'className='text-red-700 p-1 flex-1 outline-none rounded'/>
        <BiSearch size={25}/>
    </div>
  )
}

export default Search