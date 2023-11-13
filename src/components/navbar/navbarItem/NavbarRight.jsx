import React, { useEffect } from 'react'
import { BiSearch, BiHeart } from "react-icons/bi"
import { SlBasket } from "react-icons/sl"
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {carts, itemCount} = useSelector(state => state.carts)

  console.log(carts);

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input type="text" className='bg-gray-200 outline-none' placeholder='Arama Yapınız...'/>
        <BiSearch size={28}/>
      </div>
      <BiHeart size={28}/>
      <div onClick={() => navigate('cart')} className='relative'>
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
        <SlBasket size={28}/>
      </div>
    </div>
  )
}

export default NavbarRight