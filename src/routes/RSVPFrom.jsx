import React from 'react';


const RSVPForm = () => {
  return (
      <div
          className='flex flex-col mt-20 p-5 justify-center bg-stone-700 items-center bg-cover text-white h-96 shadow-2xl'>
          <div className='flex flex-col justify-center items-center w-96 h-96'>
              <p className='navfont text-3xl'>Registrer deg</p>
              <div className='flex justify-center mt-10 mb-10'>
                  <button className=''>
                      <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdip4GOpRpavnANAvFZCDptXmgQte2skT8uCHgSzOSFZskoZw/viewform?usp=sf_link"
                          target='_blank'
                          rel='noreferrer'
                          className='border shadow-2xl rounded-xl hover:bg-stone-500 p-3 font-bold transition duration-500 ease-out-out transform hover:scale-105 overflow-hidden max-w-64'
                          title="https://docs.google.com/forms/d/e/1FAIpQLSdip4GOpRpavnANAvFZCDptXmgQte2skT8uCHgSzOSFZskoZw/viewform"
                      >
                          Ta meg til skjemaet!
                      </a>
                  </button>
              </div>
              <h1 className='text-7xl'>Vi gleder oss!</h1>
          </div>
      </div>
  )
      ;
};

export default RSVPForm;
