import React from 'react';
import Kristin_1 from '../images/Kristin_1.jpeg';
import Kristin_2 from '../images/Kristin_2.jpeg';
import Emil_1 from '../images/Emil_1.jpg';
import Emil_og_Alex from '../images/Emil_og_Alex.jpg';
import Henning_1 from '../images/Henning_1.jpg';
import Henning_og_Alex from '../images/Henning_og_Alex.jpg';

const Folovere = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <div>
                <h1 className='text-6xl'>Forlovere</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {/* Kristin */}
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row justify-center items-center'>
                        <img src={Kristin_1} alt="Kristin" className='h-60 rounded mt-2 mx-2'/>
                        <img src={Kristin_2} alt="Kristin og Nina" className='h-60 rounded mt-2 mx-2'/>
                    </div>
                    <p className='navfont mt-10 text-xl text-center max-w-xs'>
                        Kristin og jeg (Nina) møttes i studietiden og har ikke sett oss tilbake siden.
                        Vi har delt gleder og sorger og hang en vinflaske gjennom årene. Kristin
                        er en strålende dame med en smittende latter og et upåklagelig humør. Hun
                        er kunnskapssøkende, klok og med stor sans for orning och reda. Kristin
                        elsker å reise til fjerne strøk og bringer hvert år med seg innsikt og
                        gode historier hjem til her - som ofte har brukt tiden på å rusle rundt
                        på tunet i Heidal.
                    </p>
                </div>

                {/* Emil og Henning */}
                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-2 gap-4'>
                        <img src={Emil_1} alt="Emil" className='h-60 rounded mt-2 mx-2'/>
                        <img src={Emil_og_Alex} alt="Emil og Alex" className='h-60 rounded mt-2 mx-2'/>
                        <img src={Henning_1} alt="Henning" className='h-60 rounded mt-2 mx-2'/>
                        <img src={Henning_og_Alex} alt="Henning og Alex" className='h-60 rounded mt-2 mx-2'/>
                    </div>
                    <p className='navfont mt-10 text-xl text-center max-w-xs'>
                        Emil, Henning og jeg (Alex) ble gode venner etter videregående, ved å henge i samme leilighet i Lillestrøm. Vi startet å studere sammen, trene sammen, bokse sammen, dro til USA sammen, var faddere sammen, og startet å jobbe sammen. Emil og Henning er to uvurderlige venner jeg ikke klarte å velge mellom, så det måtte bli begge som forlovere, så klart!
                        Emil er smart, snill og reflektert, alltid klar for en dyp samtale eller en utfordrende sjakkmatch. Han bringer alltid en god stemning og sitt varme hjerte inn i enhver situasjon.
                        Henning er trygg, pålitelig og lojal, en klippe i livet og en man kan stole på. Hans stabilitet og gode råd har vært uvurderlig gjennom årene.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Folovere;
