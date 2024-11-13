import React from 'react'
import { BiBasket } from 'react-icons/bi'
import Count from './Count'

const Basket = () => {
  return (
    <div className='relative flex'>
                <BiBasket size={30}/>
                <Count/>
    </div>
  )
}

export default Basket