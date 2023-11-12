import React from 'react'
import { BiSearch, BiHeart } from "react-icons/bi"
import { SlBasket } from "react-icons/sl"

const NavbarRight = () => {
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input type="text" className='bg-gray-200 outline-none' placeholder='Arama Yapınız...'/>
        <BiSearch size={28}/>
      </div>
      <BiHeart size={28}/>
      <div className='relative'>
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>3</div>
        <SlBasket size={28}/>
      </div>
    </div>
  )
}

export default NavbarRight