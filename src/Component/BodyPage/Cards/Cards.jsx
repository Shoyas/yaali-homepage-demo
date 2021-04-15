import React from 'react';
import './Cards.css';
import image from '../../image/diamondRing.jpg';

const Cards = ({product}) => {
    const {stocks} = product;
    const totalCard = stocks.length;
    console.log("Product: ", product);
    console.log("Stocks: ", stocks);

    // let colorsEven = [];
    // let colorsOdd = [];
    // console.log("colorsEven :", colorsEven);
    // console.log("colorsOdd :", colorsOdd);

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


    // let colorsEven = ["textRed"];
    let card1 = ["card-1"];
    let card2 = ["card-2"];
    let card3 = ["card-3"];
    let card4 = ["card-4"];

    let card5 = ["card-5"];
    let card6 = ["card-6"];
    let card7 = ["card-7"];
    let card8 = ["card-8"];

    let card9 = ["card-9"];
    let card10 = ["card-10"];
    let card11 = ["card-11"];
    let card12 = ["card-12"];

    let demo = ["demo"];

    // card image
    let cardImage1 = ["card-image-1"];
    let cardImage2 = ["card-image-2"];
    let cardImage3 = ["card-image-3"];
    let cardImage4 = ["card-image-4"];

    let cardImage5 = ["card-image-5"];
    let cardImage6 = ["card-image-6"];
    let cardImage7 = ["card-image-7"];
    let cardImage8 = ["card-image-8"];

    let cardImage9 = ["card-image-9"];
    let cardImage10 = ["card-image-10"];
    let cardImage11 = ["card-image-11"];
    let cardImage12 = ["card-image-12"];


    let sideBarLeft1 = ["card-body-1"];   // upper and left
    let sideBarLeft2 = ["card-body-2"];   // upper and left



    let sideBarRight3 = ["card-container-3"]; // right and bottom
    let sideBarRight4 = ["card-container-4"]; // right and bottom


    // console.log("colorsEven :", colorsEven);
    // console.log("colorsOdd :", colorsOdd);

    console.log(stocks.length);

    // if( stocks.length % 2 === 0){
    //     if(colorsEven.length === 0){
    //         colorsEven.push("textRed");
    //     }
    // }
    // if( stocks.length % 2 === 1){
    //     if(colorsOdd.length < 0){
    //         colorsOdd.push("textGreen");
    //     }
    // }

    
    
    

    return (
        <>
            <div className="row">
                {
                    stocks.map((stocks) => { 
                        return(
                            <div className="col-md-3" >
                                <div className={`${
                                    // card-container for giving bar right and bottom
                                    stocks.Product.id === 4 ? `${sideBarRight4}`: `${demo}` 
                                    &&
                                    stocks.Product.id === 3 ? `${sideBarRight3}`: `${demo}` 


                                } mt-5`}>
                                    <div className={`${
                                        // card-body for giving bar left and top
                                        stocks.Product.id === 1 ? `${sideBarLeft1}`: `${demo}` 
                                        &&
                                        stocks.Product.id === 2 ? `${sideBarLeft2}`: `${demo}` 

                                    } ${
                                        stocks.Product.id === 1 ? `${card1}`: `${demo}` 
                                        &&
                                        stocks.Product.id === 2 ? `${card2}`: `${demo}`
                                        &&
                                        stocks.Product.id === 3 ? `${card3}`: `${demo}`
                                        &&
                                        stocks.Product.id === 4 ? `${card4}`: `${demo}`
                                        &&
                                        stocks.Product.id === 5 ? `${card5}`: `${demo}`
                                        &&
                                        stocks.Product.id === 6 ? `${card6}`: `${demo}`
                                        &&
                                        stocks.Product.id === 7 ? `${card7}`: `${demo}`
                                        &&
                                        stocks.Product.id === 8 ? `${card8}`: `${demo}`
                                        &&
                                        stocks.Product.id === 9 ? `${card9}`: `${demo}`
                                        &&
                                        stocks.Product.id === 10 ? `${card10}`: `${demo}`
                                        &&
                                        stocks.Product.id === 11 ? `${card11}`: `${demo}`
                                        &&
                                        stocks.Product.id === 12 ? `${card12}`: `${demo}`

                                        // &&
                                        // stocks.Product.id % 2 === 0 ? `${colorsEven}` : `${colorsOdd}` 
                                    } mb-3`}>
                                        {/* card image design */}
                                        <div className={`${
                                            stocks.Product.id === 1 ? `${cardImage1}`: `${demo}`
                                            &&
                                            stocks.Product.id === 2 ? `${cardImage2}`: `${demo}`
                                            &&
                                            stocks.Product.id === 3 ? `${cardImage3}`: `${demo}`
                                            &&
                                            stocks.Product.id === 4 ? `${cardImage4}`: `${demo}`
                                            &&
                                            stocks.Product.id === 5 ? `${cardImage5}`: `${demo}`
                                            &&
                                            stocks.Product.id === 6 ? `${cardImage6}`: `${demo}`
                                            &&
                                            stocks.Product.id === 7 ? `${cardImage7}`: `${demo}`
                                            &&
                                            stocks.Product.id === 8 ? `${cardImage8}`: `${demo}`
                                            &&
                                            stocks.Product.id === 9 ? `${cardImage9}`: `${demo}`
                                            &&
                                            stocks.Product.id === 10 ? `${cardImage10}`: `${demo}`
                                            &&
                                            stocks.Product.id === 11 ? `${cardImage11}`: `${demo}`
                                            &&
                                            stocks.Product.id === 12 ? `${cardImage12}`: `${demo}`
                                        
                                        } img-fluid`}>
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