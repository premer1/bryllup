import React from 'react';
import Blomst from '../images/blomster.png';

const Footer = () => {
  return (
    <div className=''>
      <div className="flex justify-center mt-5">
        <img src={Blomst} alt="img" className='h-56' />
      </div>
    </div>
  );
}

export default Footer;
