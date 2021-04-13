import React from 'react';
import './FooterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,  faCartPlus } from '@fortawesome/free-solid-svg-icons';

const FooterPage = () => {
    return (
        <>
            <div className="footerPage-area container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3 footer-tag">
                        <h4><strong>YaAli</strong></h4>
                        <ul>
                            <li>Terms</li>
                            <li>Licence</li>
                            <li>Market API</li>
                            <li>Become on affiliate</li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-tag">
                        <h4><strong>Help</strong></h4>
                        <ul>
                            <li>Terms and Template</li>
                            <li>Authors</li>
                            <li>Help Center</li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-tag">
                        <h4><strong>Our Community</strong></h4>
                        <ul>
                            <li>Community</li>
                            <li>Blog</li>
                            <li>Forums</li>
                            <li>Meetups</li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-tag">
                        <h4><strong>Contact</strong></h4>
                        <ul>
                            <li>Street, City, Region, Country</li>
                            <li>info@yaali.com</li>
                            <li>+880 1234 456 789</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="container-fluid">
                <div className="row mt-3 mb-5">
                        <div className="col-md-6">
                            <small style={{color: 'gray'}}>@{(new Date()).getFullYear()} YaAli All right reserved</small>
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse bd-highlight">
                            <FontAwesomeIcon className="ml-3" icon={faCartPlus} />
                            <FontAwesomeIcon icon={faHeart} /> 
                        </div>
                </div>
            </div>
        </>
    );
};

export default FooterPage;