import React from 'react';
import Marianne_1 from '../images/Marianne_1.jpeg';
import Marianne_2 from '../images/Marianne_2.jpeg';

const Toastmaster = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <div>
                <h1 className='text-6xl'>Toastmaster</h1>
            </div>
            <div className='flex flex-row justify-center items-center mt-10'>
                <img src={Marianne_1} alt="Marianne 1" className='h-80 rounded mx-2'/>
                <img src={Marianne_2} alt="Marianne 2" className='h-80 rounded mx-2'/>
            </div>
            <div className='navfont mt-10 text-xl text-center max-w-2xl'>
                <p>Marianne er en veldig god venninne av Nina og et fyrverkeri av en dame! Hun er skarp, klok og morsom
                    og
                    elsker storfamilien sin. Den har hun delt raust med Nina, som har fått være assosiert medlem helt
                    siden de møttes i studietiden.</p>
                <p className='mt-4'>En god latter forlenger livet, både Mariannes eget og oss rundt, og helt uredd
                    hevder
                    hun sine synspunkter både på jobb og privat. Da må man stå rakrygget, og det gjør hun med glans.</p>
                <p className='mt-4'>Hvis du ønsker å holde en tale eller bidra med et kulturelt innslag, vennligst ta
                    kontakt med Marianne.</p>
                <p className='mt-4'>Telefon: 45 39 19 33 | E-post: mbhagen13@gmail.com</p>
            </div>
        </div>
    )
        ;
}

export default Toastmaster;
