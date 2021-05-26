import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import env from 'dotenv'


import Boussole from '../../components/boussole'
import Title from '../../components/title'

export default function Dashboard() {

    const { zipCode } = useParams();

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&postal_code=${zipCode}&country=FR`)
        .then((reponse) => reponse.json())
        .then((content) => {
            // console.log(content.data[0]);
            setData(content.data[0])
        })
    }, [])

    console.log(data);

    return (
        <div>
            <Title>{data}</Title>
           <Boussole>{data}</Boussole>
        </div>
    )
}
