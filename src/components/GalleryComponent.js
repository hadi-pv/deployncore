import React, { Component } from 'react';
import Top from './NavComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import {Breadcrumb,BreadcrumbItem,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import pic1 from '../assets/images/Imprints gallery/img1.png';
import pic2 from '../assets/images/Imprints gallery/img2.jpg';
import pic3 from '../assets/images/Imprints gallery/img3.jpg';
import pic4 from '../assets/images/Imprints gallery/img4.jpg';
import pic5 from '../assets/images/Imprints gallery/img5.jpg';
import pic6 from '../assets/images/Imprints gallery/img6.jpg';
import pic7 from '../assets/images/Imprints gallery/img7.jpg';
import pic8 from '../assets/images/Imprints gallery/img8.jpg';
import pic9 from '../assets/images/Imprints gallery/img9.jpg';
import pic10 from '../assets/images/Imprints gallery/img10.jpg';
import pic11 from '../assets/images/Imprints gallery/img11.jpg';
import pic12 from '../assets/images/Imprints gallery/img12.jpg';
import pic13 from '../assets/images/Imprints gallery/img13.png';
import pic14 from '../assets/images/Imprints gallery/img14.png';



class Photos extends Component{
  render(){
    const PHOTO_SET = [
      {
        src: pic1,
        width: 4,
        height: 3
      },
      {
        src: pic2,
        width: 1,
        height: 1
      },
      {
        src: pic3,
        width: 2,
        height: 3
      },
      {
        src: pic4,
        width: 4,
        height: 5
      },
      {
        src: pic5,
        width: 4,
        height: 2
      },
      {
        src: pic6,
        width: 2,
        height: 3
      },
      {
        src: pic7,
        width: 3,
        height: 3
      },
      {
        src: pic8,
        width: 1,
        height: 1
      },
      {
        src: pic9,
        width: 5,
        height: 3
      },
      {
        src: pic10,
        width: 7,
        height: 3
      },
      {
        src: pic11,
        width: 4,
        height: 3
      },
      {
        src: pic12,
        width: 2,
        height: 3
      },
      {
        src: pic13,
        width: 4,
        height: 5
      },
      {
        src: pic14,
        width: 4,
        height: 3
      }
    ];
      return(
        <React.Fragment>
          <Top />
          <Header />
          <div className="container">
            <Row>
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/main">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Gallery</BreadcrumbItem>
              </Breadcrumb>
            </Row>
            <Row>
              <h2>GALLERY</h2>
              <hr />
            </Row>
            <Row>
              <Gallery photos={PHOTO_SET} />
            </Row>
          </div>
          <Footer />
        </React.Fragment>
      );    
  }

}

export default Photos;