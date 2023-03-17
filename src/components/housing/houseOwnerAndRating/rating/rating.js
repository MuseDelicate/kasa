import React from 'react';
import starEmpty from '../../../../assets/starEmpty.svg'
import starFull from '../../../../assets/starFull.svg'


const Rating = ({ rating }) => {

    console.log(rating);

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
            {starArray.map((elem) => (
                <span>
                    {elem
                        ? <img src={starFull} alt="étoile" />
                        : <img src={starEmpty} alt="étoile" />
                    }
                </span>

            ))}
        </div>
    )
}

export default Rating;