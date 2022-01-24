import { Container, Card, } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'


function article({post}) {
    return (



        <Container>

            <Card className='my-5' border='light'>
            <Card.Img variant="top" src={post.thumbnail.url} />
            
            <Card.Body className='bg-light text-dark'>
                <Card.Header>
                    <Card.Title className='display-3'>{post.title}</Card.Title>
                    <Card.Title>{post.excerpt}</Card.Title>
                </Card.Header>
                <Card.Body className='bg-light text-dark'>
                <ReactMarkdown>{post.mainContent.markdown}</ReactMarkdown>
                </Card.Body>
                
                
            </Card.Body>
            </Card>


            

          





            
        </Container>
    )
}

export default article
