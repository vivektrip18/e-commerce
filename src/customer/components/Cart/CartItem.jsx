import { RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[6rem] h-5rem lg:w-[9rem] lg:h-[12rem]'>
                <img className='w-full h-full object-cover object-top' src='./brown_chinos_men.jpeg' alt=''/>
                                
            </div>
            <div className='ml-5 mt-2 space-y-1'>
                <p className='font-semibold'>Men Regular Fit Brown Chinos</p>
                <p className='opacity-70' style={{textAlign:"left"}}>Size: M, Brown</p>
                <p className='opacity 70 mt-2' style={{textAlign:"left"}}>Seller: India Mart</p>
                <div className='flex space-x-3 mt-6' >
                    <p className='font-semibold'>
                    ₹199
                    </p>
                    <p className='opacity-50 line-through'>₹211</p>
                    <p className='text-green-600 font-semibold'>5% off</p>
                </div>
            </div>
           
        </div>
        <div className='flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>1</span>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                    
                </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>
                        remove
                    </Button>
                </div>

            </div>

    </div>
  )
}

export default CartItem