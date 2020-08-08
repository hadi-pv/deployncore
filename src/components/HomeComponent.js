import React,{Component} from 'react';
import { Row, Col, Media,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from "../assets/images/IMPRINTS LOGO 1.png";
import clocktower from "../assets/images/CLOCK TOWER WHITE-2.png";
import bg from "../assets/images/bghome1.jpg";

class Home extends Component{
    render(){
        return(
            <div className="home"
            style={{  
                backgroundImage:"url("+bg+")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <Row className="top">
                    <Media>
                    <Media left href="#">
                        <Media object src={clocktower} alt="Generic placeholder image" height="50vh"/>
                    </Media>
                    </Media>
                </Row>
                <Row justify-content-center align-items-center>
                    <Col xs={12} md={6} justify-content-center align-items-center>
                        <Link to="/sub"><Button className="main_button" size="lg" block><i className="fa fa-angle-double-left fa-2x float-left"></i> DONATIONS AND VOLUNTEERING<span></span></Button></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <Link to="/main"><Button className="main_button" size="lg" block>MAIN PAGE <i className="fa fa-angle-double-right fa-2x float-right"></i><span></span></Button></Link>
                    </Col>
                </Row>
                <Row justify-content-center height="50vh">
                    <div className="container">
                        <Col xs={12}>
                            <center><img src={logo} width="80%" /></center>
                        </Col>
                    </div>
                </Row>

            </div>
        );
    }
}

export default Home;