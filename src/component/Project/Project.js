import React from 'react';
import Header from '../Header/Header';
import cardOne from '../../images/Screenshot (530).png';
import cardTwo from '../../images/Screenshot (531).png';
import cardThree from '../../images/Screenshot (535).png';
import cardFour from '../../images/Screenshot (320).png';
import cardFive from '../../images/Screenshot (585).png';
import cardSix from '../../images/Screenshot (322).png';

import GitHubIcon from '@material-ui/icons/GitHub';

import './Project.css'
import { Button } from 'react-bootstrap';

const Project = () => {
    return (
        <div className="project ml-5">
            <Header></Header>
            <div class="container">
                <div id="Latest Work" class="mt-2">
                    <h3 className="pra text-white">
                        Latest Working <span style={{ color: 'yellow' }} > Projects</span>
                    </h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4 rounded-3">
                        <div class="col mt-5">
                            <div class="card panda-card h-100 shadow">
                                <img src={cardOne} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 className="pra" >Akash-Airlines</h5>
                                    <p class="card-text">
                                        <small className="pra" >Take your air(ticket) from Akash-Airlines. Proved successful working within tight deadlines and fast-paced atmosphere by using React(Js).</small>
                                    </p>
                                    <a href="https://github.com/Shaikot3009/Akash-Airlines" target="_blank"><GitHubIcon></GitHubIcon></a>
                                    <br />
                                    <Button className="link-button" variant="outline-dark" size="lg  mt-2 pt-2"> <a className="db" href="https://airlines-3953f.web.app/" target="_blank">Live Site</a></Button>
                                    <br />
                                    <small className="pra" class="text-muted">@Akash's Creation</small>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div class="card panda-card h-100 shadow">
                                <img src={cardTwo} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 className="pra"  >English-League</h5>
                                    <p class="card-text">
                                        <small className="pra" >Find your fancy team details here. Developed by using modern JavaScript library(React), HTML5 and CSS3.</small>
                                    </p>
                                    <a href="https://github.com/Shaikot3009/English-Premier-Legue" target="_blank"><GitHubIcon></GitHubIcon></a>
                                    <br />
                                    <Button className="link-button" variant="outline-dark" size="lg  mt-2 pt-2"> <a className="db" href="https://english-premier-leauge-akash.netlify.app/" target="_blank">Live Site</a></Button>
                                    <br />
                                    <small className="pra" class="text-muted">@Akash's Creation</small>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div class="card panda-card h-100 shadow">
                                <img src={cardThree} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 className="pra" >Search-Your-Food</h5>
                                    <p class="card-text">
                                        <small className="pra" >
                                            Find your fancy food details here. Developed user interfaces with HTML5 ,CSS3 and Bootstrap.
                                        </small>
                                    </p>

                                    <a href="https://github.com/Shaikot3009/Hungry-Monster" target="_blank"><GitHubIcon></GitHubIcon></a>
                                    <br />
                                    <Button className="link-button" variant="outline-dark" size="lg  mt-2 pt-2"> <a className="db" href="https://shaikot3009.github.io/Hungry-Monster/" target="_blank">Live Site</a></Button>
                                    <br />
                                    <small className="pra" class="text-muted">@Akash's Creation</small>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div class="card panda-card h-100 shadow">
                                <img src={cardFour} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 className="pra" >Ema-john.ak</h5>
                                    <p class="card-text">
                                        <small className="pra" >
                                            Amazon clone site.Still working on it. Developing by using React(Js)
                                            Still working on it.
                                        </small>
                                    </p>

                                    <a href="https://github.com/Shaikot3009/ema-john.ak" target="_blank"><GitHubIcon></GitHubIcon></a>
                                    <br />
                                    <Button className="link-button" variant="outline-dark" size="lg  mt-2 pt-2"> <a className="db" href="https://ema-john-site-akash.netlify.app/" target="_blank">Live Site</a></Button>
                                    <br />
                                    <small className="pra" class="text-muted">@Akash's Creation</small>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div class="card panda-card h-100 shadow">
                                <img src={cardFive} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 className="pra"  >Online-Market</h5>
                                    <p class="card-text">
                                        <small className="pra" >
                                            Implemented user interface employing React and Redux with Semantic-React for styling.
                                        </small>
                                    </p>

                                    <a href="https://github.com/Shaikot3009/Team-150-Online-Market" target="_blank"><GitHubIcon></GitHubIcon></a>
                                    <br />
                                    <Button className="link-button" variant="outline-dark" size="lg  mt-2 pt-2"> <a className="db" href="https://online-market-5dcec.web.app/" target="_blank">Live Site</a></Button>
                                    <br />
                                    <small className="pra" class="text-muted">@Akash's Creation</small>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-5">
                            <div class="card panda-card h-100 shadow">
                                <img src={cardSix} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 className="pra" >Bus-Ticket-Counter</h5>
                                    <p class="card-text">
                                        <small className="pra" >
                                            Take your ticket easily form Bus-Ticket-Counter.Develpoed by using JavaScript.
                                        </small>
                                    </p>

                                    <a href="https://github.com/Shaikot3009/Ninja-Ticket.ak" target="_blank"><GitHubIcon></GitHubIcon></a>
                                    <br />
                                    <Button className="link-button" variant="outline-dark" size="lg  mt-2 pt-2"> <a className="db" href="https://shaikot3009.github.io/Ninja-Ticket.ak/" target="_blank">Live Site</a></Button>
                                    <br />
                                    <small className="pra" class="text-muted">@Akash's Creation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="pra text-center mt-3 pt-3 mb-3 ml-5 justify-content-end text-light">@Akash's Portfolio {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
                    <br />
                </div>
            </div>

        </div>
    );
};

export default Project;