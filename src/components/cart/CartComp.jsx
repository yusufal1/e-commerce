import React, { useEffect } from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {

  const dispatch = useDispatch();


  return (
    <div className='my-10 flex items-center justify-between'>
      <img className='w-[150px]' src={cart.image} alt="" />
        <div>
          <div className='text-xl max-w-[400px] truncate'>
            {cart?.title}
          </div>
          <div>
            {cart?.description}
          </div>
          </div>
          <div className='font-bold text-2xl'>
            {cart?.price} TL ({cart?.quantity})
          </div>
          <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[150px] h-16 flex items-center cursor-pointer justify-center rounded-md'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp