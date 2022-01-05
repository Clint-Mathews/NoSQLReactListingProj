import React from 'react'

function Cards({ data }: any) {
    return (
        <div key={data.id} className="Card">
            <h2>Name: {data.name}</h2>
            <h2>Desc: {data.description}</h2>
            <h2>Address: {`${data.location.address}, ${data.location.zipcode}`}</h2>
            <h2>Website: {data.location.web}</h2>
            <h2 >Location: {data.place.map((item: any) => {
                return (<li>{item}</li>);
            })}</h2>
            <h2 className='places'>Visited: <div className={`showVisit ${data.visited ? 'visited' : 'notvisited'}`}></div></h2>
        </div>
    )
}

export default Cards
