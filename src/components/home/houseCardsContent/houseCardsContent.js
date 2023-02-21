import { React, useState, useEffect } from 'react';
import * as api from '../../../utils/api';
import { Link } from 'react-router-dom';


const HouseCardsContent = () => {
    const [data, setData] = useState([]);
// useEffct prend 2 paramètres : une fonction et un tableau de dépendance
    useEffect(() => {
        api.loadHousingDatas()
            // .then((res) => {
            //     return res.json();
            // })
            .then((data) => setData(data))
        }, []);

    return (
        <div>
                {console.log(data)}
                {data.map((housing) => (
                    <Link to = {'/housing/' + data.id}>
                        <div>
                                <img src={data.cover} alt={`${housing} cover`} />
                                <span>{housing.title} </span>
                        </div>
                    </Link>
                ))
                }
            
        </div>
    )
}

export default HouseCardsContent;
