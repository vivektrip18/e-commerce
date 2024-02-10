import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-grey shadow-lg  hover:shadow-2xl '>
        <Grid container spacing={2} sx={{justifyContent:"space-between",marginTop:"10px"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer mb-4'>
                    <img className='w-[8rem] h-[10rem] object-cover object-top' src='./mens_shoes/adidas_harden_vol7.png' alt=''/>
                    <div className='ml-5 space-y-2' style={{textAlign:"left"}}>
                      <p className='mt-5 '>Adidas Mens Harden Volume 7</p>
                      <p className='opacity-50 text-xs font-semibold ' >Size:8</p>
                      <p className='opacity-50 text-xs font-semibold '>Color:Black</p>
                    </div>

                </div>
            </Grid>

            <Grid item xs={2} >
              <p className='flex cursor-pointer mt-4 '>1099</p>
            </Grid>
            <Grid item xs={4} className='flex '>
              <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-1 mt-5 text-sm'/>
              {true && <div>
                <p className=' mt-4'>
                <span>
                  Delivered on March 12
                </span>
              </p>
              <p className='text-sm opacity-80'>Your Item has been delivered</p>
              </div> }
              {false && <p className=' mt-4'>
                <span>
                  Expected delivery on March 14
                </span>
              </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard