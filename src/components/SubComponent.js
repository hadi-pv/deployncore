import React from 'react';
import {Jumbotron,Container,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Donation from './TabComponent';

function Sub(props){
    return(
        <React.Fragment>
            <Jumbotron fluid>
                <Container fluid>
                    <div className="float-right float-top">
                        <Link to="/"><Button color="primary" size="lg" block>MAIN PAGE&emsp;<i className="fa fa-angle-double-right fa-2x float-right"></i><span></span></Button></Link>
                    </div>
                    <h3 style={{padding:3}}>IMPRINTS DONATIONS PORTAL</h3>
                    <p className="lead">Follow the steps to contribute to this campaign</p>
                </Container>
            </Jumbotron>
            <Container>
                <Donation />
            </Container>
            
        </React.Fragment>
    );
}

export default Sub;