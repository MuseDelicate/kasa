import React from 'react';

const Picture = ({ picture, name}) => {
    console.log(picture);
    console.log(name);
// if (props) {
//     console.log(props);
//     console.log(props.name);
//     console.log(props.picture);
// }

    return(
        <div>
            <img src={picture} alt={name}/>
            {/* {(picture !== undefined && name !== undefined)
                ? <img src={picture} alt={name}/>
                : ''
            } */}
        </div>
    )
}

export default Picture;