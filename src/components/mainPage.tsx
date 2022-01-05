import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from './Cards';
const MainPage = () => {
    const [restaurants, setRestaurants] = useState(null as any);
    useEffect(() => {
        async function fetchData() {
            // console.log(window.location.hostname + `:${process.env.REACT_APP_PORT}`);
            // console.log(`http://${url}/restaurants`);
            const url = window.location.hostname + `:${process.env.REACT_APP_PORT}`;
            const resdata = await axios.get(`http://${url}/restaurants`);
            // console.log(resdata.data.data);
            const arrData = Object.keys(resdata.data.data).map(res => resdata.data.data[res])
            console.log(arrData);
            setRestaurants(arrData);
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>Restaurants</h1>
            {restaurants && restaurants.map((data: any) => {
                return (
                    <Cards data={data} />
                )
            })}
        </>
    )
}

export default MainPage
