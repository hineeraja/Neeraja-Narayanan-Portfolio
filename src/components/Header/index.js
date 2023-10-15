import React from 'react';
import coverImage from "../../assets/img/pp3.jpeg";
import ReactRoundedImage from "react-rounded-image";


//import bootstrap for react
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Header() {
  return (
    <section className="my-5">
    <Jumbotron fluid className="mb-0">

      <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <ReactRoundedImage
                image={coverImage}
                roundedColor="green"
                imageWidth="350"
                imageHeight="380"/>
            </Col>
            {/* <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-dark p-0-lg pt-4">
                console.log('Hello World');</h1>
                <p className="text-light text-center text-md-left h3">
                  I'm Neeraja Narayanan 
                  <p></p>
                  Master in Technolgy, Master in Management, PSM
                </p>
            </Col> */}
            <Col className="pl-md-5">
   
    <p className="text-dark text-center text-md-left h3">I'm Neeraja Narayanan</p>
    <p className="text-dark text-center text-md-left h3">
        Master in Technology, Master in Management, PSM
    </p>
</Col>

          </Row>
        </Container>
        </Jumbotron>
        <Container class="shadow mb-5 bg-light">
          <h2>A little bit about me</h2>
          <p>
As an engineer with dual Master's degrees in Technology and Management, I've seamlessly blended foundational 
tools like JavaScript, HTML, and CSS with sophisticated technologies such as Express.js, 
React, MongoDB, and MySQL. Each project I've embarked upon mirrors my deep-seated passion for 
software development and my commitment to transforming visions into reality. Armed with robust 
academic credentials, a rich tapestry of technical skills, and an unyielding drive for innovation, 
I stand poised to contribute to a forward-thinking organization,
 ready to craft solutions that inspire and resonate. </p>
        </Container>
    </section>
  );
}

export default Header;