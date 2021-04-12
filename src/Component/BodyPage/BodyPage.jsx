import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import Cards from './Cards/Cards';

const BodyPage = () => {
    const [product, setProduct] = useState(FakeData);
    console.log(product);
    return (
        <div className="container">
            <div className="content-fluid mt-5">
                {
                   Object.keys(product).map(() => <Cards product={product} key={product.id}/>)
                }
            </div>
        </div>
    );
};

export default BodyPage;