import React from 'react';
import { Link } from 'react-router-dom';

const Goldfish = () => {
    return (
        <>
        <div>
            <p> You have picked Goldfish: a tasty snack. Mmm crackers. Here's your reward: </p>
            <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Goldfish-Crackers.jpg/240px-Goldfish-Crackers.jpg' alt="goldfish crackers"></img>
            <p> <Link to='/'> Return to vending machine </Link> </p>
        </div>
    </>
    )
}

export default Goldfish;