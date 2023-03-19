import React from 'react';
import starEmpty from '../../../../assets/starEmpty.svg'
import starFull from '../../../../assets/starFull.svg'


const Rating = ({ rating }) => {
if (rating !== undefined) {
    console.log(rating);
}

    const totalStars = 5;
    const validateStars = rating;

    const remainStars = totalStars - validateStars;

    let starArray = [];


    for (let i = 1; i<= validateStars; i++) {
        starArray.push(true);
    }
    for (let i = 1; i<= remainStars; i ++) {
        starArray.push(false);
    }

    return(
        <div>
            {starArray.map((elem, index) => (
                <span>
                    {elem
                        ? <img src={starFull} key={`${starFull}-${index}`} alt="étoile" />
                        : <img src={starEmpty} key={`${starEmpty}-${index}`} alt="étoile" />
                    }
                </span>

            ))}
        </div>
    )
}

export default Rating;