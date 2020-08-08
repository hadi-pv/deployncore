import React from 'react';
import Top from './NavComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Row ,Breadcrumb,BreadcrumbItem, Col,Card,CardBody,CardText,CardTitle,CardImg,Button,CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';
import smiles1 from "../assets/images/smiles1-removebg-preview.png";

function Smiles(props){
    return(
        <React.Fragment>
            <Top />
            <Header />
            <div className="container">
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/main">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Smiles</BreadcrumbItem>
                    </Breadcrumb>
                </Row>
                <Row>
                    <h2>SPREADING THOUSAND SMILES</h2>
                    <hr />
                </Row>
                <Row justify-content-center align-items-center>
                    <Col xs={12} md={4}>
                        <Card border="dark">
                            <CardImg variant="top" src={smiles1} height="200px"/>
                            <CardBody>
                            <CardTitle>Make a Change</CardTitle>
                            <CardText>
                                Click the button below and follow the instructions for donating to this campaign.
                            </CardText>
                            </CardBody>
                            <CardFooter>
                            <small className="text-muted">
                                <Link to="/sub">
                                    <Button color="success" block>
                                        Register Now
                                    </Button>
                                </Link>
                            </small>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} className="mt-auto mb-auto">
                        <p>
                            IMPRINTS is a charitable organization that has been operating in our college for many years.
                        </p>
                        <p>
                            Throughout these years students directly collected funds to run our activities.It is also known that Imprint does not have a steady source of income. But SPREADING THOUSANDS SMILES is an initiative that we have put forward to ensure a hassle free secure income.
                        </p>
                        <p>
                            In this initiative volunteers pay at least Rs.1000 / - a year that is saving about Rs.3 a day for Imprints
                        </p>
                        <p>
                            We are inviting volunteers to help us by donating Rs.1000 yearly to keep our little mates smile even better
                        </p>
                    </Col>
                </Row>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Smiles;