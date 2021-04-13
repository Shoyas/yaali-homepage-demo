import React from 'react';
import './Cards.css';
import image from '../../image/diamondRing.jpg';

const Cards = ({product}) => {
    const {stocks} = product;
    console.log(product);
    console.log(stocks);
    

    return (
        <>
            <div className="row">
                {
                    stocks.map((stocks) => { 
                        return(
                            <div className="col-md-3">
                                <div className="card-container">
                                    <span className="card-header"></span>
                                    <div className="card-body">
                                        <div className="card-image img-fluid">
                                            {/* <img src={stocks.Product.image} alt={stocks.Product.name}/> */}
                                            <img src={image} alt={stocks.Product.name}/>
                                        </div>
                                        <div className="card-tag text-center">
                                            <small><strong>{stocks.Product.name}</strong></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Cards;