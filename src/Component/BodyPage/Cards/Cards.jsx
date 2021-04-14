import React from 'react';
import './Cards.css';
import image from '../../image/diamondRing.jpg';

const Cards = ({product}) => {
    const {stocks} = product;
    const totalCard = stocks.length;
    console.log("Product: ", product);
    console.log("Stocks: ", stocks);

    let colorsEven = [];
    let colorsOdd = [];
    console.log("colorsEven :", colorsEven);
    console.log("colorsOdd :", colorsOdd);

    // for(let i=0; i< stocks.length; i++){
    //     let id = stocks[i].id;
    //     console.log(id);
    //     console.log(stocks.length);

    //     if( id%2 === 0){
    //         if(colorsEven.length === 0){
    //             colorsEven.push("textRed");
    //             break;
    //         }
    //     }
    //     if( id%2 === 1){
    //         if(colorsOdd.length === 0){
    //             colorsOdd.push("textGreen");
    //             break;
    //         }
    //     }

    // }

    console.log(stocks.length);

    if( stocks.length % 2 === 0){
        if(colorsEven.length === 0){
            colorsEven.push("textRed");
        }
    }
    if( stocks.length % 2 === 1){
        if(colorsOdd.length < 0){
            colorsOdd.push("textGreen");
        }
    }

    
    
    

    return (
        <>
            <div className="row">
                {
                    stocks.map((stocks) => { 
                        return(
                            <div className="col-md-3" >
                                <div className="card-container">
                                    <span className="card-header"></span>
                                    <div className={`card-body ${
                                        stocks.Product.id % 2 === 1 ? `${colorsOdd}`: `${colorsEven}` 
                                        &&
                                        stocks.Product.id % 2 === 0 ? `${colorsEven}` : `${colorsOdd}` 
                                    }`}>

                                        <div className="card-image img-fluid">
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

{/* <img src={stocks.Product.image} alt={stocks.Product.name}/>  pest it 38 no line*/} 



// colors.map((colors) =>{
//     colors.find(() => {
//         if('textRed'){
//             return(
//                 colors.push('textRed')
//             )
//         }
//         else if('textGreen'){
//             return(
//                 colors.push('textGreen')
//             )
//         }
//     })
// } )