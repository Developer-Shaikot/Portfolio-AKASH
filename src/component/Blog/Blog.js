import React from 'react';
import Header from '../Header/Header';
import './Blog.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardOne from '../../images/1_yuwHMcs1pIMqgs8uxD6CMw.png'
import cardTwo from '../../images/1_rcnQvx-MymeVpRc3pW2Ksg.jpeg'
import cardThree from '../../images/1_Lmbnmh-eS_ezrO_MW72tyA.png'
import cardFour from '../../images/1_4CO5UF5956JCbPrdLgIGtA.jpeg'
import cardFive from '../../images/1_xj-fJEU8BQEBYj3fYDFw3Q.png'
import cardSix from '../../images/1_-JO6zhZG05ZgfbR2IH3kmQ.png'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Blog() {
    const classes = useStyles();

    return (
        <div className="background  ml-5">
           
           <Header />
            <h3 className="pra text-white text-center mb-3 justify-content-center align-item-center text-light mb-5 mr-5"> <span style={{color:'#61dafb'}}>Akash's</span> Blogs</h3>
            <div className="container  px-3" >
            <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3 ml-3 mr-2">
            <div  class="p-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cardOne}
                        title="SSL"
                    />
                    <CardContent>
                        <h6 className="pra"  gutterBottom variant="h5" component="h2">
                            SSL
                        </h6>
                        <small className="pra" variant="body2" color="textSecondary" component="p">
                        On the daily basis there have millions users transmit sensitive information over the internet. Most secure…
                     </small>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button  size="small" color="primary"> <a className="pra" href="https://shaikot3009.medium.com/what-why-ssl-is-mandatory-to-your-website-more-secure-236c487fb5d4" target="_blank"> Learn More</a>
                    </Button>
                </CardActions>
            </Card>
            </div>
            <div  class="p-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cardTwo}
                        title="What to do?"
                    />
                    <CardContent>
                        <h6 className="pra" gutterBottom variant="h5" component="h2">
                        What to do?
                        </h6>
                        <small className="pra" variant="body2" color="textSecondary" component="p">
                        A web developer is a programmer who is expert on developing applications to the World Wide Web(www)...
                     </small>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> <a className="pra" href="https://shaikot3009.medium.com/what-to-do-to-become-a-professional-developer-c1f388de1f93" target="_blank">Learn More</a>
                        
                    </Button>
                </CardActions>
            </Card>
            </div>
            <div  class="p-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cardThree}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h6 className="pra" gutterBottom variant="h5" component="h2">
                            React.JS
                        </h6>
                        <small className="pra" variant="body2" color="textSecondary" component="p">
                        React.js is a library of javascript what we used in web development to build interactive elements on website...
                     </small>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> <a className="pra" href="https://shaikot3009.medium.com/how-react-js-is-most-favourite-to-us-e6719b9302dd" target="_blank"> Learn More</a>
                    </Button>
                </CardActions>
            </Card>
            </div>
            <div  class="p-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cardFour}
                        title="Interviews Questions"
                    />
                    <CardContent>
                        <h6 className="pra" gutterBottom variant="h5" component="h2">
                        10-JS Questions
                        </h6>
                        <small className="pra" variant="body2" color="textSecondary" component="p">
                        If you are a web developer you have to find out some basic questions and get yourself ready for the answer...
                     </small>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> <a className="pra" href="https://shaikot3009.medium.com/10-javascript-interviews-questions-34a5d696671c" target="_blank"> Learn More</a>
                       
                    </Button>
                </CardActions>
            </Card>
            </div>
            <div  class="p-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cardFive}
                        title="TLS"
                    />
                    <CardContent>
                        <h6 className="pra" gutterBottom variant="h5" component="h2">
                        What are SSL & TLS?
                        </h6>
                        <small className="pra" variant="body2" color="textSecondary" component="p">
                            Secured Sockets Layer(SSL) and Transport Layer Security(TLS) ARE mechanism of...
                     </small>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> <a className="pra" href="https://shaikot3009.medium.com/what-why-ssl-is-mandatory-to-your-website-more-secure-236c487fb5d4" target="_blank">Learn More</a>
                        
                    </Button>
                </CardActions>
            </Card>
            </div>
            <div  class="p-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cardSix}
                        title="React.js Features"
                    />
                    <CardContent>
                        <h6 className="pra" gutterBottom variant="h5" component="h2">
                        React.js Features
                        </h6>
                        <small className="pra" variant="body2" color="textSecondary" component="p">
                        React is a popular JavaScript library for creating front-end applications, such as user interfaces that...
                     </small>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> <a className="pra" href="https://shaikot3009.medium.com/how-react-js-is-most-favourite-to-us-e6719b9302dd" target="_blank"> Learn More</a>
                       
                    </Button>
                </CardActions>
            </Card>
            </div>
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
}

