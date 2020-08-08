import React, { Component} from 'react';
import Top from './NavComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import {Col,Row,Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import bg1 from "../assets/images/bg1.png";
import qustn from "../assets/pdf/NCORE Online NEET Mock Test(Trial)-questions.pdf";
import ans from "../assets/pdf/NCORE Online NEET Mock Test(Trial)-answers.pdf";


class Mains extends Component{
    render(){
        return(
            <React.Fragment>
                <Top />
                <Header />
                <Link to="/">
                    <Button color="primary" ><i className="fa fa-angle-double-left fa-2x float-left"></i>&emsp;<h7> Back to Main Page</h7></Button>
                </Link>
                <div className="container">
                    <Row justify-content-center align-items-center>
                        <Col xs={12} md={8} className="mt-5">
                            <h3>Why Us</h3>
                            <p>
                                The competition has remained gristly throughout these years. NCORE will help you handle this because the brains behind it are the ones who has toiled in this fight before. National and State toppers of the previous years has set up the questions after hours of brainstorming on what is important and what is not. Don't miss this opportunity to discover the portions where you should sharpen your skills and also the ones you've successfully mastered. Keep going and you will make it.
                            </p>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card border="dark">
                                <CardImg variant="top" src={bg1} height="300px"/>
                                <CardBody>
                                <CardTitle>Announcements</CardTitle>
                                <CardText>
                                    <a href={qustn} target="_blank">
                                        <Button color="danger">
                                            QUESTION PAPER
                                        </Button>
                                    </a><br /><br />
                                    <a href={ans} target="_blank">
                                        <Button color="danger">
                                            ANSWER KEY
                                        </Button>
                                    </a>
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Mains;