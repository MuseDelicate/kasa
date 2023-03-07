import React from 'react';

const HouseInformations = ({ title, location, tags }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{location}</div>
            {/* <HouseLocation /> */}
            {/* <HouseTags /> */}
            <div>
                {tags.map((tag) => 
                    <div>{tag}</div>
                )}
            </div>
        </div>
    )
}

export default HouseInformations;