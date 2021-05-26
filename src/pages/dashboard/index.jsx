import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import './style.css'

import Boussole from '../../components/boussole'
import Title from '../../components/title'
import Horloge from '../../components/horloge'

export default function Dashboard() {

    
        const { zipCode } = useParams();
    
        const [data, setData] = useState([])

        const [hour, setHours] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hour = date.getHours();
            const minuts = date.getMinutes();
            const seconds = date.getSeconds();
            const time = hour + ":" + minuts + ":" + seconds;
            setHours(time)
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&postal_code=${zipCode}&country=FR`)
        .then((reponse) => reponse.json())
        .then((content) => {
            console.log(content.data[0]);
            setData(content.data[0])
        })
    }, [])

    const sunset = data.sunset


    // console.log(data);

    return (
        <div
    //    className={sunset <= time ? "body sunset" : "body blank"}
        >
            <Horloge time={hour}/>
            <Title>{data}</Title>
           <Boussole>{data}</Boussole>
        </div>
    )
}
