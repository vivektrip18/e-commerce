import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, Divider } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard/>

        </div>

        <div >
        <div className='lg:grid grid-cols-3  relative lg:pt-15 '>
            <div className='col-span-2'>
                {[1,1,1,1,].map((item)=><CartItem/>)}
            </div>
        
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-10 '>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                    <Divider/>
                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 pl-1 pr-1 text-black'>
                            <span>Price</span>
                            <span className='pl-4'>₹499</span>
                        </div>
                        <div className='flex justify-between p-1 '>
                            <span>Delivery Charge</span>
                            <span className='text-green-600 '>Free</span>
                        </div>
                        <div className='flex justify-between p-1 '>
                            <span>Discount</span>
                            <span className='text-green-600 '>-₹499</span>
                        </div>
                        <div className='flex justify-between pt-2 pl-1 pr-1  font-bold mb-20'>
                            <span>Total Amount</span>
                            <span className='text-green-600 '>₹499</span>
                        </div>
                        <Button className='w-full ' variant="contained" sx={{px:"0.7rem",py:"0.5rem",bgcolor:"#9155fd"}}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default OrderSummary