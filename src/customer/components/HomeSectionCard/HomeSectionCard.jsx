import React from 'react'

const HomeSectionCard = ({product}) =>{
    return(
        <div className='cursor-pointer flex-col items bg-white rounded-large 
        shadow-large overflow-hidden w-[10rem] '>
           
            <div className='h-[15rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full p-2' 
                src={product.imageUrl} alt="" />

            </div>
            <div className='p-1.8' >
                <h1 className='text-sm font-bold ' style={{fontSize:'16px'}}>{product.brand}</h1>
                <p className='mt-2' style={{fontSize:'12px',color:'#777'}}>{product.title}</p>
            </div>
        </div>
    )
}
export default HomeSectionCard