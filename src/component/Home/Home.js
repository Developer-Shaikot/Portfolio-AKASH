import logo from './../../1_pZzcIsmKGPBVRyZ2MWjpKQ-removebg-preview.png';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Animation from '../Animation/Animation';


const Home = () => {
    return (
        <div>
            <div className="App  ml-5">
                <header
                    className="App-header justify-content-center text-center">
                        
                    <h3 className="pra">Hi, I'm <span className="name" > Akash</span></h3>
                    <small className="pra col-md-5 justify-content-end text-center mt-2 pt-3 mb-3">
                        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                        <br />
                        <small className="col-md-5 justify-content-end text-center">
                        <br/>

                        
                        <a className="Social" href="https://www.linkedin.com/in/shaikot-kundu-akash-239805210/" target="_blank"><LinkedInIcon></LinkedInIcon> </a>
                        <a className="Social" href="https://github.com/Shaikot3009" target="_blank"><GitHubIcon></GitHubIcon></a>
                       
                         <a className="Social" href="https://twitter.com/ShaikotAkash" target="_blank"> <TwitterIcon></TwitterIcon> </a>
                        
                        </small>
                        <br />
                        <Button variant="outline-info" size="lg  mt-3 mb-2"> <a className="db" href="https://drive.google.com/file/d/1BCSWF5if9-Uvk1k_elbGaMleuff_d2Q1/view?usp=sharing" target="_blank">Resume</a></Button>
                        <br/>
                       
                        
                    </small>  
                </header>
                    <br />
                <img src={logo} className="App-logo " alt="logo" />
                        <br/>        
            </div>
            <div className="App-header ml-5">
            <div className="col-md-5 justify-content-center text-center pt-3 mb-3">
                <br />
            <p className="pra">
            LATEST WORKING<span style={{color:'yellow'}} > PROJECTS</span>
                    </p>
            <br />
            <a href="/project">
            <Animation></Animation>
            </a>
            
            </div>
            
            </div>
            <footer class="pra text-center mt-3 pt-3 mb-3 ml-5 justify-content-end text-light">@Akash's Portfolio {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
            <br />
        </div>
        
    );
};

export default Home;