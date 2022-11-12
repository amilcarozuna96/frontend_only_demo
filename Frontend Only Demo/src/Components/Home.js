import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {



    return (
        <>
        
          <Card>
                <Card.Img variant="top" src="https://img.freepik.com/premium-vector/multiethnic-group-people-society-multicultural-community-portrait-citizens-young-adult-elder-people-illustration_102902-1805.jpg?w=2000" />
                <Card.Body>
                    <Card.Title>WELCOME!</Card.Title>
                    <Card.Text>
                        This project is the culmination of Deloitte's .NET Academy.
                        It combines back-end & front-end knowledge making it a fullstack integration.
                    </Card.Text>
                </Card.Body>
          </Card>
          <br />
          <CardGroup>
                <Card>
                <Card.Img variant="top" src="https://fabric.inc/wp-content/uploads/2021/08/frontend-backend.png" />
                <Card.Body>
                <Card.Title>About the project...</Card.Title>
                <Card.Text>
                This project is intended to apply what we have learned throughout the academy in a real-life application. That includes the know-how for building the back structure of the app but also the design and all the interactive components for the users.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 5 days ago</small>
                </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg?w=2000" />
                <Card.Body>
                <Card.Title>Objectives</Card.Title>
                <Card.Text>
                In this specific project we were asked to create:
                - Users Page: table with users were we can Add,Update and Delete every user
                - Items Page: table with item's list per user were you can Update and Delete but also add the items on the fly without having to go back to the page. {' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 4 days ago</small>
                </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src="https://www.thedroidsonroids.com/wp-content/uploads/2020/08/backend2.png" />
                <Card.Body>
                <Card.Title>Who is Amilcar Ozuna?</Card.Title>
                <Card.Text>
                He is the creator of this project and he hopes it fullfills the expectations of the Academy instructors (even though he doesn't know what he's doing most of the time), specially because it has been a hard and long journey up to this point. If you read this, wish him luck!
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 30 mins ago</small>
                </Card.Footer>
                </Card>
          </CardGroup>
          <br />
        </>
      );
}

export default Home;