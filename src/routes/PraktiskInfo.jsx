import React from 'react'
import Tryvannstua from '../images/tryvannstua.png'
const PraktiskInfo = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <div>
        <h1 className='text-6xl'>Praktisk Info</h1>
      </div>

      <div className='flex flex-col justify-center items-center mt-4 p-3 text-xl'>
      <h2>Bryllupet feires på Tryvannstua 29. juni</h2>
      <img src={Tryvannstua} alt="img" className='h-80 rounded mt-2'/>
      </div>

      <div className='flex flex-col justify-center items-center mt-4 text-center text-xl'>
        <h2>Felles busser går fra Oslo S, Sjøsiden, kl.14</h2>
        <h2 className='mt-1'>Det er satt opp to busser tilbake til Oslo S, kl. 23 og kl. 02.00</h2>
      </div>

      <h2 className='mt-10 text-center text-l'>Lurt å ta med jakke <br />For Tøffinger - Ta med badetøy og håndkle</h2>

    </div>
  )
}

export default PraktiskInfo