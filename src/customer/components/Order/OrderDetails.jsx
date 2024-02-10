import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-lg py-7'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-10'>
            <OrderTracker activeStep={4}/>
        </div>
        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md  border' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4 p-2'>
                        <img className='w-[8rem] h-[10rem] flex ' src='./mens_shoes/nike_white_af_1_low.png' alt=''/>
                        <div className='space-y-2 ml-5 '>
                            <p className='font-semibold'>Men Nike White Air Force 1 Lows</p>
                            
                            <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                <span>Color:White</span> <span>Size:8</span>
                            </p>
                            <p>Seller:Nike</p>
                            <p>Rs 10999</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                        <span className='mr-2'>Rate & Review Product</span>
                    </Box>


                </Grid>
            </Grid>)}
            
        </Grid>
    </div>
  )
}

export default OrderDetails