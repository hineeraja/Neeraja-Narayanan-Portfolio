import React from 'react';
import Project from '../components/Project';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './stylesheet.css'


function Projects() {
    const projects = [
        {
          "title": "Huzzah-Music",
          "desc": "Music application",
          "key": "Huzzah-Music",
          "imageSrc": "../assets/img/hero-1.jpg",
          "repository": "https://github.com/aedelfrid/Huzzah-Music/",
          "appURL": "'https://aedelfrid.github.io/Huzzah-Music/"
        },
        {
          "title": "Fresh finder",
          "desc": "Its a grocery application where customers can purchase with the recent stock",
          "key": "faceblog",
          "imageSrc": "../assets/img/hero-1.jpeg",
          "repository": "https://github.com/hineeraja/Fresh-Finder",
          "appURL": "https://freshfinder-ee2adcd480d5.herokuapp.com/"
        },
        {
          "title": "Pic Talk",
          "desc": "Its a social media application where pictures can talk more ",
          "key": "faceblog",
          "imageSrc": "../assets/img/hero-1.jpeg",
          "repository": "https://github.com/hineeraja/Fresh-Finder",
          "appURL": "https://freshfinder-ee2adcd480d5.herokuapp.com/"
        },
    ]
        return(
          <div>
       <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Projects </h1>
            <h2>Deployed URL and Repositories </h2>
          </div>
        </Container>
      </Jumbotron>
       
      <Container className="p-2 shadow">
        <Row>
                {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
        </Container>
          </div>
        )
}
export default Projects;