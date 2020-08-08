import React, { useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText ,TabContent, TabPane, Nav, NavItem, NavLink,  Row, Col ,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import classnames from 'classnames';
import  {Link} from 'react-router-dom';
import Payment from './PaymentComponent';

const Donation = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Step 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Step 2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <hr />
            <Row>
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/">Main Page</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Step 1</BreadcrumbItem>
              </Breadcrumb>
            </Row>
          <Row>
            <Col xs="12">
                <ListGroup>
                    <ListGroupItem active>
                        <ListGroupItemHeading>PLEASE READ THE FOLLOWING INFORMATIONS CAREFULLY!</ListGroupItemHeading>
                    </ListGroupItem>
                    <ListGroupItem >
                        <ListGroupItemHeading>Instruction 1</ListGroupItemHeading>
                        <ListGroupItemText>
                        After reading these instructions please go to step 2.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Instruction 2</ListGroupItemHeading>
                        <ListGroupItemText>
                        You will see a window where you must fill the purpose of payment as -"spreading thousand smiles" or "Imprints" and enter the amount being donated. After that click the pay button.                  
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Instruction 3</ListGroupItemHeading>
                        <ListGroupItemText>
                        In the new window please fill in the details regarding your name, email and phone number.                  
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Instruction 4</ListGroupItemHeading>
                        <ListGroupItemText>
                        Then you can select a mode of payment and do the payment online.                  
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Instruction 5</ListGroupItemHeading>
                        <ListGroupItemText>
                        You will be awarded with a certificate of appreciation from imprints via email for your kind donation.                  
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
            <hr />
            <Row>
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/">Main Page</Link></BreadcrumbItem>
                  <BreadcrumbItem><Link onClick={() => { toggle('1'); }}>Step 1</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Step 2</BreadcrumbItem>
              </Breadcrumb>
            </Row>
            <Row>
                <Payment />
            </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Donation;
