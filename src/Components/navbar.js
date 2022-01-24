import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useState } from 'react'

function WebsiteNavbar() {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Link className='navbar-brand' to="/">LearningReact &emsp;/</Link>
            <Nav className="me-auto">
            <Link className='navbar-subtitles hover-underline-animation' to="/">Home</Link>
            <Link className='navbar-subtitles hover-underline-animation' to="/projects">Projects</Link>
            <Link className='navbar-subtitles hover-underline-animation' to="/goals">Goals</Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default WebsiteNavbar
