import React from 'react'
import Lovlia from '../images/Lovlia.jpeg'
import osloS from '../images/Oslo-s.png'
import osloS2 from '../images/Oslo-s-2.png'

const PraktiskInfo = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <div>
                <h1 className='text-6xl'>Praktisk Info</h1>
            </div>

            <div className='flex flex-col justify-center items-center mt-4 text-center text-xl'>
                <h2>Bryllupet feires på Løvlia 29. juni</h2>
                <img src={Lovlia} alt="img" className='h-80 rounded mt-2'/>
                <h2 className='mt-4'>
                    Løvlia ligger nydelig til på Lauvlisetervollen, en gammel setergrend som tilhører gårder på
                    Ringerike.
                </h2>
                <h2 className='mt-1'>
                    Skiforeningen startet byggingen av den nå 300 m² store laftete tømmerbygningen sommeren
                    1936, og åpnet stua for publikum den 7. februar 1937.
                </h2>
                <h2 className='mt-1'>
                    Stua har servering og 63 sengeplasser som kan utvides ved spesielle anledninger.
                </h2>
            </div>

            <div className='flex flex-col justify-center items-center mt-4 text-center text-xl'>
                <h2>Felles busser går fra Oslo S, Sjøsiden, kl. 13:00 - Link til kart <a
                    href="https://maps.app.goo.gl/imG96RG795JjppmW9" target="_blank" rel="noopener noreferrer"
                    style={{color: 'blue'}}>her</a></h2>
                <div className='flex w-full justify-center'>
                    <img src={osloS} alt="img" className='w-1/3 rounded'/>
                    <img src={osloS2} alt="img" className='w-1/3 rounded'/>
                </div>
                <h2 className='mt-1'>Det settes opp transport tilbake til Oslo S 01:30 og dagen etter kl 12:30</h2>
            </div>
            <div className='flex flex-col justify-center items-center mt-5 text-center text-xl'>
                <h1 className='text-4xl'>Overnatting</h1>
                <h2 className='mt-1'>Hvis du har lyst til å våkne opp i frisk luft og spise frokost med gamle og nye
                    venner, kan du overnatte!</h2>
                <h2 className='mt-1'>Kr. 600 for seng i fire- eller seksmanssrom inkludert sengetøy, håndklær og
                    frokost.</h2>
                <h2 className='mt-4'>Vi organiserer sengeplass; gi oss beskjed på SMS innen 31. mai</h2>
                <h2 className='mt-1'>Nina - 95 92 56 75</h2>
                <h2 className='mt-1'>Alex - 94 23 83 18</h2>
            </div>

            <h2 className='mt-10 text-center text-l'>Dresskoden er dress</h2>
            <h2 className='mt-0 text-center text-l'>Lurt å ta med jakke</h2>

            <div className='flex flex-col justify-center items-center mt-10 text-center text-l'>
                <h2>Hva gir man noen som synes de har alt de trenger?</h2>
                <h2>Kanskje en opplevelse?</h2>
            </div>

        </div>
    )
}

export default PraktiskInfo
