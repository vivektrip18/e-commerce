import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_shoes } from '../../../data/mens_shoes'

const HomePage = () =>{
    return(
        <div>
            <MainCarousel/>
            <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_shoes} sectionName={"Men's T-shirts"}/>
                <HomeSectionCarousel data={mens_shoes} sectionName={"Men's Shoes"}/>
                <HomeSectionCarousel data={mens_shoes} sectionName={"Men's Jeans"}/>
                <HomeSectionCarousel data={mens_shoes} sectionName={"Women's Sarees"}/>
            </div>

        </div>
    )
}
export default HomePage