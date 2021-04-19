import React from 'react';
import './Cards.css';
import './CardResponsive.css';
import image from '../../image/diamondRing.jpg';

const Cards = ({product}) => {
    const {stocks} = product;
    console.log(stocks);
    
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


    let sideBarLeft1 = ["header-1"];   // upper and left
    let sideBarLeft2 = ["header-2"];   // upper and left
    let sideBarRight3 = ["header-3"];   // upper and right
    let sideBarRight4 = ["header-4"];   // upper and right
    let sideBarLeft5 = ["header-5"];   // upper and left
    let sideBarBottom5 = ["footer-bottom-5"]; // bottom
    let sideBarLeft6 = ["header-6"];   // upper and left
    let sideBarBottom6 = ["footer-bottom-6"]; // bottom
    let sideBarRight7 = ["header-7"];   // upper and right
    let sideBarBottom7 = ["footer-bottom-7"]; // bottom
    let sideBarRight8 = ["header-8"];   // upper and right
    let sideBarBottom8 = ["footer-bottom-8"]; // bottom

    let sideBarLeft9 = ["header-9"];   //left
    let sideBarBottom9 = ["footer-bottom-9"]; // bottom


    let sideBarLeft10 = ["header-10"];   //left
    let sideBarBottom10 = ["footer-bottom-10"]; // bottom

    let sideBarRight11 = ["header-11"] // right
    let sideBarBottom11 = ["footer-bottom-11"]; // bottom

    let sideBarRight12 = ["header-12"] // right
    let sideBarBottom12 = ["footer-bottom-12"]; // bottom


    let sideBarResRight2 = ["footer-res-right-2"] // After responsive right 2
    let sideBarResBottom4 = ["footer-res-bottom-4"] // After responsive bottom 4
    let sideBarResRight5 = ["footer-res-right-5"] // After responsive right 5
    let sideBarResLeft8 = ["footer-res-left-8"] // After responsive left 8
    let sideBarResLeft11 = ["footer-res-left-11"] // After responsive left 11

    let sideBarResBottom1 = ["footer-res-bottom-1"] // After responsive bottom 1
    let sideBarResBottom2 = ["footer-res-bottom-2"] // After responsive bottom 2
    let sideBarResBottom3 = ["footer-res-bottom-3"] // After responsive bottom 3

    


    // let sideBarLeft5 = ["header-5"];   // upper and left
    // let sideBarLeft6 = ["header-6"];   // upper and left
    
    // let sideBarLeft9 = ["header-9"];   // left 
    // let sideBarLeft10 = ["header-10"];   // left 


    // let sideBarRight3 = ["footer-3"]; // right and bottom
    // let sideBarRight4 = ["footer-4"]; // right and bottom
    // let sideBarRight7 = ["footer-7"]  // right and bottom
    // let sideBarRight8 = ["footer-8"]; // right and bottom

    // let sideBarRight11 = ["footer-11"] // right
    // let sideBarRight12 = ["footer-12"] // right


    // let sideBarBottom5 = ["footer-bottom-5"]; // bottom
    // let sideBarBottom6 = ["footer-bottom-6"]; // bottom
    // let sideBarBottom7 = ["footer-bottom-7"]; // bottom
    // let sideBarBottom8 = ["footer-bottom-8"]; // bottom
    // let sideBarBottom9 = ["footer-bottom-9"]; // bottom
    // let sideBarBottom10 = ["footer-bottom-10"]; // bottom
    // let sideBarBottom11 = ["footer-bottom-11"]; // bottom
    // let sideBarBottom12 = ["footer-bottom-12"]; // bottom
   
    

    return (
        <>
            <div className="row">
                {
                    stocks.map((stocks) => { 
                        return(
                            <div className="col-md-3 col-sm-4 col-6" >
                                <div className="card-container mt-5">
                                    <div className={`${
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
                                    } 
                                    
                                    ${
                                        
                                        stocks.Product.id === 2 ? `${sideBarResBottom2}`: `${demo}`
                                        &&
                                        stocks.Product.id === 3 ? `${sideBarResBottom3}`: `${demo}`
                                        &&
                                        stocks.Product.id === 5 ? `${sideBarBottom5}`: `${demo}`
                                        &&
                                        stocks.Product.id === 6 ? `${sideBarBottom6}`: `${demo}`
                                        &&
                                        stocks.Product.id === 7 ? `${sideBarBottom7}`: `${demo}`
                                        &&
                                        stocks.Product.id === 8 ? `${sideBarBottom8}`: `${demo}`
                                        &&
                                        stocks.Product.id === 9 ? `${sideBarBottom9}`: `${demo}`
                                        &&
                                        stocks.Product.id === 10 ? `${sideBarBottom10}`: `${demo}`
                                        &&
                                        stocks.Product.id === 11 ? `${sideBarBottom11}`: `${demo}`
                                        &&
                                        stocks.Product.id === 12 ? `${sideBarBottom12}`: `${demo}`

                                    }
                                    card-body`}>
                                        <div className={`${
                                            stocks.Product.id === 1 ? `${sideBarLeft1}`: `${demo}` 
                                            &&
                                            stocks.Product.id === 2 ? `${sideBarLeft2}`: `${demo}`
                                            &&
                                            stocks.Product.id === 3 ? `${sideBarRight3}`: `${demo}`
                                            &&
                                            stocks.Product.id === 4 ? `${sideBarRight4}`: `${demo}`
                                            &&
                                            stocks.Product.id === 5 ? `${sideBarLeft5}`: `${demo}`
                                            &&
                                            stocks.Product.id === 6 ? `${sideBarLeft6}`: `${demo}`
                                            &&
                                            stocks.Product.id === 7 ? `${sideBarRight7}`: `${demo}`
                                            &&
                                            stocks.Product.id === 8 ? `${sideBarRight8}`: `${demo}`
                                            &&
                                            stocks.Product.id === 9 ? `${sideBarLeft9}`: `${demo}`
                                            &&
                                            stocks.Product.id === 10 ? `${sideBarLeft10}`: `${demo}`
                                            &&
                                            stocks.Product.id === 11 ? `${sideBarRight11}`: `${demo}`
                                            &&
                                            stocks.Product.id === 12 ? `${sideBarRight12}`: `${demo}`

                                        }
                                        ${
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
                                        } img-fluid product-name`}>
                                            <img src={image} alt={stocks.Product.name}/>
                                            <br/>
                                            <small><strong style={{color: 'white'}}>
                                                {stocks.Product.name}
                                                </strong></small>
                                        </div>
                                        <div className={`${
                                            stocks.Product.id === 2 ? `${sideBarResRight2}`: `${demo}`
                                            &&
                                            stocks.Product.id === 4 ? `${sideBarResBottom4}`: `${demo}`
                                            &&
                                            stocks.Product.id === 5 ? `${sideBarResRight5}`: `${demo}`
                                            &&
                                            stocks.Product.id === 8 ? `${sideBarResLeft8}`: `${demo}`
                                            &&
                                            stocks.Product.id === 11 ? `${sideBarResLeft11}`: `${demo}`
                                            &&
                                            stocks.Product.id === 1 ? `${sideBarResBottom1}`: `${demo}`
                                            
                                        }`}></div>
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



{/* <>
            <div className="row">
                {
                    stocks.map((stocks) => { 
                        return(
                            <div className="col-md-3" >
                                <div className="card-container mt-5">
                                    <div className="card-body card mt-3">
                                        <div className="header"></div>
                                        <div className="card-image img-fluid">
                                            <img src={image} alt={stocks.Product.name}/>
                                        </div>
                                        <div className="card-tag text-center">
                                            <small><strong style={{color: 'white'}}>{stocks.Product.name}</strong></small>
                                        </div>
                                        <div className="footer"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </> */}