import React from 'react';
import {Jumbotron, Media} from 'reactstrap';
import {Link} from 'react-router-dom';
import ncorelogo from "../assets/images/123.png";

function Header(props){
    return(
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-md-6">
                        <Media>
                            <Media top middle>
                                <Link to="/"><Media object src={ncorelogo} height="100vh"></Media></Link>
                            </Media>
                        </Media>
                    </div>
                    <div className="col-12 col-md-6">
                        <Media>
                            <Media body>
                                <Media text>
                                    <p>
                                        NCORE is an All India Online NEET Mock Test orchestrated by the student body of the prestigious Calicut Medical College. This is a fundraising initiative for Imprints,a charity organization run by the College Union and Department of Peadiatrics of the college for economically hassled children fighting against diseases like Type 1 Diabetes, Wilson's disease and Thalassemia.We seek your support for this event to help us continue our benevolent run with the children.
                                    </p>                                
                                </Media>
                            </Media>
                        </Media>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
}

export default Header;