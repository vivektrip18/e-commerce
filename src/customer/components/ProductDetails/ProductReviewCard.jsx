import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'


const ProductReviewCard = () => {
  return (
    <div>
        <Grid container gap={3}>
            <Grid item s={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:'#9155fd'}}>V</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9} style={{textAlign:"left"}}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg' style={{textAlign:"left"}}>Vivek</p>
                        <p className='opacity-70'>December 5,2023</p>
                    </div>

                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={0.1}/>
                <p>lorem ipsum good product</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard