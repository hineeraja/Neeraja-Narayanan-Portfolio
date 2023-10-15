import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function SocialIcons() {
    const social = [
        {
        "name":"LinkedIn",
        "url":"https://linkedin.com/in/neeraja-narayanan-6a656488 ",
        "class": "fa-linkedin" ,
    },
    {
        "name":"Github",
        "url":"https://github.com/hineeraja",
        "class":"fa-github",
    },
    {
        "name":"Email",
        "url":"https://gmail.com",
        "class":"fa-email"
    }
    ]
    return (
      <div>
          <Col>
              <Container>
              <span><a href="https://github.com/hineeraja"><i className="fab fa-github pr-4"></i></a></span>
              <span><a href="https://gmail.com"><i className="far fa-envelope pr-4"></i></a></span> 
              <span><a href="https://linkedin.com/in/neeraja-narayanan-6a656488"><i className="fab fa-linkedin pr-4"></i></a></span> 
              </Container>
            </Col>
          </div>

    )
}
export default SocialIcons