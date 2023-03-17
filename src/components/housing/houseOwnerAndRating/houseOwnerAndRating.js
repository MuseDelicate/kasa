import React from 'react';
import Owner from './owner';
import Rating from './rating/rating';


const HouseOwnerAndRating = (props) => {
    return(
        <div>
            <Owner host={props.host}/>
            <Rating rating={props.rating}/>
        </div>
    )
}

export default HouseOwnerAndRating;