import React from 'react'

import { Container, Row } from 'react-bootstrap'
import Posts from './blogPosts'
import About from './about'

function Home({blogPosts, getPost}) {
    return (
        <div>
            <Row><About/></Row>
            <Container>
                <Row className='py-5'>
                    {blogPosts && <Posts blogPosts={blogPosts} getPost={getPost}/>}
                </Row>
            </Container>
        </div>
    )
}

export default Home
