import React from 'react';
import HouseLocation from './houseLocation';
import HouseTitle from './houseTitle';
import HouseTags from './tags/houseTags';
// 

const HouseInformations = (props) => {
    return (
        <>
            <HouseTitle />
            <HouseLocation />
            <HouseTags />
        </>
    )
}

export default HouseInformations;