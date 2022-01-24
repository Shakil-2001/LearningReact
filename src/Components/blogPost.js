import { Card, Button, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'

function blogPost({post, getPost}) {

    const curPost = post[1]; 
    return (
        <Col md={4}>
            <Card className="d-flex align-items-stretch" style={{ 'min-height': '30rem'}}>
                <Card.Img variant="top" src={curPost.thumbnail.url}/>
                <Card.Body>
                    <Card.Title>{curPost.title}</Card.Title>
                    <Card.Text>{curPost.excerpt}</Card.Text>
                </Card.Body>
                <Link onClick={() => getPost(curPost)} className='mb-2 mx-2 btn btn-primary' to={"/article-" + curPost.slug}>Read Article</Link>
            </Card>
        </Col>
    )
}

export default blogPost
