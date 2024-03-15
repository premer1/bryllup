import React from 'react'
import Tidslinjeimg from '../images/tidslinje.png'
const Tidslinje = () => {
  return (
      <div className='flex flex-col items-center justify-center mt-10'>
          <div>
              <h1 className='text-7xl'>Tidslinje</h1>
          </div>
          <br/>
          <br/>
          <img src={Tidslinjeimg} alt="img" className='sm:h-96 mt-20 sm:h-48 sm:mt-10'/>
      </div>
  )
}

export default Tidslinje