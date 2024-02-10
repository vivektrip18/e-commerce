import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[16rem] h-[30rem] pt-3  pl-2 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
      </div>

      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='flex ml-3 items-center'>
          <p className='font-bold ml-3'>{product.discountedPrice}</p>
          <p className='line-through opacity-80 ml-3'>{product.price}</p>
          <p className='text-green-600 font-semibold ml-3'>{product.discountPercent}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard