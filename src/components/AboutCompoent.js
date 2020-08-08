import React from 'react';
import { Row ,Breadcrumb,BreadcrumbItem, Media,Col} from 'reactstrap';
import Top from './NavComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import {Link} from 'react-router-dom';
import img2 from "../assets/images/UNION LOGO BLACK.png";
import img1 from "../assets/images/IMPRINTS LOGO 1.png";

function About(props){
    return(
        <React.Fragment>
        <Top />
        <Header />
        <div className="container">
          <Row>
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/main">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>About Us</BreadcrumbItem>
              </Breadcrumb>
          </Row>
          <Row>
            <h2>ABOUT US</h2>
            <hr />
          </Row>
        </div>
        <div className="container">
          <Row>
              <Col xs={12} md={4}>
                <Media left middle >
                  <Media object src={img1} height="100px"/>
                </Media>                
              </Col>
              <Col xs={12} md={8}>
                <Media body>
                  <p>
                    Imprints,with a touch of heart,is a humanitarian initiative of the student body of Calicut Medical College along with the Department of Pediatrics of Calicut Medical College. It was launched in 2012 to cater medical and financial needs of the economically poor kids suffering from Type 1 Diabetes, Wilson's Disease and Thalassemia and other diseases keeping their joyful childhood at bay. Since it's establishment Imprints has been a blessing for a large number of parents hammering away to find means to support their child fight their battle.
                  </p>
                </Media>
              </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
              <Col xs={12} sm={4}>
                <Media left middle >
                  <Media object src={img2} height="100px"/>
                </Media>                
              </Col>
              <Col xs={12} md={{ order: 'first'}} sm={8}>
                <Media body>
                  <p>
                      At present Imprints provide for 58 children with Type 1 Diabetes,16 children with Thalassemia and 7 children with Neuro Wilson's. We would like to expand the ambit of our caring ways to embrace a larger population and also requires your support to do so. This pandemic time has been difficult for everyone and we can't let it stop us from doing things that make us more human.
                  </p>
                </Media>
              </Col>
          </Row>
        </div>
        <Footer />
        </React.Fragment>
    );
}

export default About;