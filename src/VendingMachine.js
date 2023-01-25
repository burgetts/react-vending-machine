import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
   return (
    <div>
            <h1> Welcome to the vending machine. </h1>
            <h2> What will you have? </h2>
            <div>
                <p> <Link to='/pepsi'> Pepsi </Link> </p>
                <p> <Link to='/goldfish'> Goldfish </Link></p>
                <p> <Link to='/skittles'> Skittles </Link></p>
            </div>

    </div>
   ) 
}

export default VendingMachine;