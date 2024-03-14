import React from 'react'

import Alexognina from '../images/alexognina.png';
import Ninaogalex from '../images/ninaogalex.jpg'
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10' >
      <h1 className='text-7xl'>Vi gifter oss!</h1>
      <img src={Alexognina} alt="img" className='mt-8 h-56' />
      <h2 className='w-96 text-center mt-5 text-2xl'>Det er til stor glede for oss om akkurat <span className='border-b border-black'>DU</span> vil feire dagen sammen med oss!</h2>
      <img src={Ninaogalex} alt="img" className='h-1/2 w-96 mt-10 rounded' />
      <p className='text-center shellinefont text-6xl mt-5'>Nina & Alex</p>
      
    </div>
  )
}

export default Home