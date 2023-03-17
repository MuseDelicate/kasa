import React from 'react';

const Picture = (props) => {
if (props) {
    console.log(props);
    console.log(props.name);
    console.log(props.picture);
}

    return(
        <div>
            {(props.host.picture !== undefined && props.host.name !== undefined)
                ? <img src={props.host.picture} alt={props.host.name}/>
                : ''
            }
        </div>
    )
}

export default Picture;