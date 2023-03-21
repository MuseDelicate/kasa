import React from 'react';
import starEmpty from '../../../assets/starEmpty.svg';
import starFull from '../../../assets/starFull.svg';


// import style from '../../../CSS/HouseOwnerAndRating.css';


const HouseOwnerAndRating = (props) => {
    return(
        <div>
            {props.host !== undefined 
                ? 
                    <div>
                        <p>{props.host.name}</p>
                        <img src={props.host.picture} alt={props.host.name} />
                    </div> 
                : ''
            }            
            <div>
                <img src={props.rating>0 ? starFull : starEmpty} alt={props.rating>0 ? 'une étoile rouge' : 'une étoile grise'} />
                <img src={props.rating>1 ? starFull : starEmpty} alt={props.rating>1 ? 'une étoile rouge' : 'une étoile grise'} />
                <img src={props.rating>2 ? starFull : starEmpty} alt={props.rating>2 ? 'une étoile rouge' : 'une étoile grise'} />
                <img src={props.rating>3 ? starFull : starEmpty} alt={props.rating>3 ? 'une étoile rouge' : 'une étoile grise'} />
                <img src={props.rating>4 ? starFull : starEmpty} alt={props.rating>4 ? 'une étoile rouge' : 'une étoile grise'} />
            </div>
        </div>
    )
}

export default HouseOwnerAndRating;