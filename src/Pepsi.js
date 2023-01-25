import React from 'react';
import { Link } from 'react-router-dom';
import './Pepsi.css';

const Pepsi = () => {
    return (
    <>
        <div>
            <p> You have picked Pepsi: the superior soda. Here's your reward: </p>
            <img src ='https://m.media-amazon.com/images/I/71gSEKGZdAL.jpg' alt="a can of pepsi"></img>
            <p> <Link to='/'> Return to vending machine </Link> </p>
        </div>
    </>
    )
}

export default Pepsi;