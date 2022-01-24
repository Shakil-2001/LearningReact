import { Card, Container, Row, Col, Badge } from 'react-bootstrap'
import calcImg from '../assets/calc.png';
import todoImg from '../assets/todo.png';
import websiteImg from '../assets/website.png';

import { Link } from 'react-router-dom';

function Projects() {
    return (

        

        <Container className='text-center'>

            <h1 className='my-5'>Projects</h1>

            <Row>

                <Col lg={4}>
                    <Card style={{ 'min-height': '50rem'}} className='mt-4'>
                        <div style={{ 'min-height': '25rem'}}>
                            <Card.Img variant="top" src={todoImg} />
                        </div>
                        
                        <Card.Body>
                            <h3>To-Do-List Application</h3>
                            <Card.Text>
                            Simple project to introduce myself to the fundamentals of React. Famaliarised myself with concepts such as components and state. Created this project following a youtube tutorial and actively making my own changes and experimenting with source code.

                            <h5 className='mt-3'>Skills Acquired:</h5>

                            <Badge className='me-2'>UseState</Badge>
                            <Badge className='me-2'>ReactComponents</Badge>
                            <Badge className='me-2'>ReactBootstrap</Badge>
                            <Badge className='me-2'>PassingProps</Badge>
                            <Badge className='me-2'>propTypes</Badge>
                            <Badge className='me-2'>npm</Badge>
                            </Card.Text>
                            <Link className='mb-2 mx-2 btn btn-primary' variant="primary" to={"/projects-todolist"}>View App</Link>
                        </Card.Body>
                    </Card>
                    

                </Col>

                <Col lg={4}>
                    <Card style={{ 'min-height': '50rem'}} className='mt-4'>
                        <div style={{ 'min-height': '25rem'}}>
                            <Card.Img variant="top" src={calcImg} />
                        </div>
                        <Card.Body>
                            <h3>Calculator Application</h3>
                            <Card.Text>
                                Primary focus to utilise what I had learned creating the to-do-list and put it into practice. Did not use any tutorials to guide the creation but did use google to aid when hitting sticking points.
                                
                                <h5 className='mt-3'>Skills Acquired:</h5>

                                <Badge className='me-2'>UseState</Badge>
                                <Badge className='me-2'>ReactComponents</Badge>
                                <Badge className='me-2'>ReactBootstrap</Badge>
                                <Badge className='me-2'>PassingProps</Badge>
                                <Badge className='me-2'>propTypes</Badge>
                                <Badge className='me-2'>npm</Badge>
                            </Card.Text>
                            <Link className='mb-2 mx-2 btn btn-primary' variant="primary" to={"/projects-calculator"}>View App</Link>

                        </Card.Body>
                        
                        
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card style={{ 'min-height': '50rem'}} className='mt-4'>
                        <div style={{ 'min-height': '25rem'}}>
                            <Card.Img variant="top" src={websiteImg} />
                        </div>
                        <Card.Body>
                            <h3>Blog Website</h3>
                            <Card.Text>
                                Wesbite which features blogs pulled from a CMS (GraphCMS) and displayed on the website. Allows the user to read blog posts. Used various resources to learn about making GraphQL queries, routing and learnt how to use UseEffect Hook. 
                
                                <h5 className='mt-3'>Skills Acquired:</h5>
                                <Badge className='me-2'>UseState</Badge>
                                <Badge className='me-2'>UseEffect</Badge>
                                <Badge className='me-2'>Router-Dom</Badge>
                                <Badge className='me-2'>ReactMarkdown</Badge>
                                <Badge className='me-2'>PassingProps</Badge>
                                <Badge className='me-2'>npm</Badge>
                                <Badge className='me-2'>GraphQL</Badge>
                                <Badge className='me-2'>GraphCMS</Badge>

                            </Card.Text>

                            <Link className='mb-2 mx-2 btn btn-primary' variant="primary" to='/'>View App</Link>
                        </Card.Body>
                        
                        
                    </Card>
                </Col>


            </Row>
            


        </Container>
        
    )
}

export default Projects
