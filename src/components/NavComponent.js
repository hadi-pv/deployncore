import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import navlogo from '../assets/images/1592892302703.png';

class Top extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
          isNavOpen: false,
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render(){
        return(
            <React.Fragment>
                <Navbar dark className="navbar" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/main"><img src={navlogo} height="30vh" alt='Imprints' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/about'><span className="fa fa-info fa-lg"></span> About us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/smiles'><span className="fa fa-smile-o fa-lg"></span> Smiles</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/gallery'><span className="fa fa-picture-o fa-lg"></span> Gallery</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Top;