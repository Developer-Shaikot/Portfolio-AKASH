import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';



const Footer = () => {

    const MyAddress = [
    
       
    ]

   
    return (
        <footer className="container bottom footer-area clear-both">
            <div className="container pt-5">
                <div className="py-5 ml-2">
                    
                    <FooterCol key={4} menuTitle="" menuItems={MyAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/saikat.akash1/" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="https://www.google.com.bd/maps/place/Pangsha/@23.7830748,89.4012665,14z/data=!3m1!4b1!4m5!3m4!1s0x39fe6060dc9eb1cd:0xb128ac5c603a228e!8m2!3d23.7800218!4d89.412731" target="_blank"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/saikat.akashh/?fbclid=IwAR3vVYzgaE7FteCFPa8gm7BhzG05O-6PeP4RQCMqsdmrzeuomjsYaB3SFHc" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <small className="db">Mobile Contact</small>
                            <br/>
                            <br/>
                            <Button variant="outline-info" size="lg mb-2"> <a className="db" href="tel:+8801833440993" target="_blank"><AddIcCallIcon></AddIcCallIcon>+8801833440993</a></Button>
                        </div>
                    </FooterCol>
                </div>
                <footer class="pra text-center mt-3 pt-3 mb-3 ml-5 justify-content-end text-light">@Akash's Portfolio {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
            <br />
            </div>
        </footer>
        
    );
};


export default Footer;