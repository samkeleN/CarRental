import React from 'react';
import suv from '@/images/suv.png';
import bakkie from '../images/bakkie.png';
import hatchback from '../images/hatchback.png';
import sedan from '../images/seden.png';

const VehicleImages = () => {
    return (
        <div className="vehicle-images">
            <div className="vehicle">
                <img src={sedan.src} alt="Sedan" style={{ width: '720px', height: '350px', border: '1px solid black', borderRadius: '20px' }}/>
            </div>

            <div className="vehicle">
                <img src={suv.src} alt="SUV" style={{ width: '720px', height: '300px', border: '1px solid black', borderRadius: '20px' }}/>
            </div>

            <div className="vehicle">
                <img src={bakkie.src} alt="Bakkie" style={{ width: '720px', height: '250px', border: '1px solid black', borderRadius: '20px' }}/>
            </div>

            <div className="vehicle">
                <img src={hatchback.src} alt="Hatchback" style={{ width: '720px', height: '250px', border: '1px solid black', borderRadius: '20px' }}/>
            </div>
        </div>
    );
};

export default VehicleImages;