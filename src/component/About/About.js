import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import img from './../../images/download__2_-removebg-preview-removebg-preview.png';
import logo from './../../images/react.png';
import logo1 from './../../images/nodejs.png';
import logo2 from './../../images/mngo.png';
import logo4 from './../../images/express.png';
import './About.css';
const About = () => {
    return (

        <div className=" back ml-2">

            <div className="container row d-flex">
                <Header></Header>

                <div className="col-md-5 AboutAlignment">
                    <h3 className="pra text-white mr-5">About Me</h3>
                    <img style={{ width: '250px', marginTop: '20px', marginLeft: '15%', border: '3px solid cyan', borderRadius: '1px' }} src={img} alt="" />
                </div>
                <div className="pra col-md-5 text-light AboutAlignment ml-5">
                    <h3>Hi, I'm <span className="name" > Akash</span></h3>
                    <br />
                    <p>
                        I am Focused frontend web developer known for designing efficient<br />  and easy-to-use interfaces for (Tech)industry’s clients.
                    </p>
                    <strong style={{ margin: '10px', padding: '5px' }}>Full Name   : Shaikot Kundu Akash</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Age         : 19</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Nationality : Bangladeshi</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Language    :Bangla,English,Hindi</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Address     :Dhaka, Bangladesh</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>FreeLance   : Available</strong>
                    <br />
                    <Button variant="outline-info" size="lg  mt-3 mb-2"> 
                    <a className="db" 
                    href="https://drive.google.com/file/d/1BCSWF5if9-Uvk1k_elbGaMleuff_d2Q1/view?usp=sharing" target="_blank">Resume</a></Button>
                    <br />
                </div >
                <div style={{ marginLeft: '25%', marginRight: '20%', marginTop: '40px' }} className="container col-md-6">
                    <br />
                    <br />
                    <h5 className="pra " ><span style={{ marginLeft: '5%', color: 'powderblue' }} > M</span><span style={{ color: 'limegreen' }}>ER</span><span style={{ color: 'powderblue' }}>N</span> -<span style={{marginLeft: '5%', color: 'rgb(32, 216, 161) ' }}>S</span><span style={{ color: 'gray' }}>TACK</span> - <span style={{ marginLeft: '5%', color: 'powderblue' }} > DEV</span><span style={{ color: 'rgb(32, 216, 161) ' }}>E</span><span style={{ color: 'gray' }}>LOP</span><span style={{ color: 'limegreen' }}>ER</span></h5>
                    <br />
                    <img src={logo2} className="About-logo justify-content-center ml-4" alt="logo" />

                    <img src={logo4} className="About-logo  justify-content-center ml-4" alt="" />

                    <img src={logo} className="About-logo  justify-content-center ml-4" alt="" />

                    <img src={logo1} className="About-logo justify-content-center ml-3" alt="" />
                    <br />
                    <br />
                </div>
            </div>
            <br />
            <div>
                <footer class="pra text-center mt-3 pt-3 mb-3 ml-5 justify-content-end text-light">@Akash's Portfolio {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
                <br />
            </div>
        </div>

    );
};

export default About;