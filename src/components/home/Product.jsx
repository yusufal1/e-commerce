import React from 'react'

const Product = ({product, sort}) => {
  return (
    <div className='w-[420px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer'>
        <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product.price} <span className='text-sm'>TL</span></div>
        <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
        <div className='text-center text-xl font-bold truncate'>{product.title}</div>
    </div>
  )
}

export default Product