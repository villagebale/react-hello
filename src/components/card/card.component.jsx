// import { Component } from "react";
import './card.styles.css'


const Card = (props) => {
    const { name, id, email } = props.mons;
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`star ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;