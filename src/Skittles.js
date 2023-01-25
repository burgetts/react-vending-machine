import React from 'react';
import { Link } from 'react-router-dom';

const Skittles = () => {
    return (
        <>
        <div>
            <p> You have picked Skittles: a yummy colorful candy. Sorry, we only have Wild Berry. Taste the rainbow! </p>
            <img src ='https://cdn.shopify.com/s/files/1/0972/7116/products/skittleswildberrybagfront_2048x.jpg?v=1673283193' alt="a pack of wild berry Skittles"></img>
            <p> <Link to='/'> Return to vending machine </Link> </p>
        </div>
    </>
    )
}

export default Skittles;