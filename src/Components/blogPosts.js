import { Row, Col } from 'react-bootstrap';

import Post from './blogPost';

function blogPosts({blogPosts, getPost}) {

    const entries = Object.entries(blogPosts);
   
    return (
        <Row className='py-5'>
            {entries.map((post) => (
                <Post post={post} getPost={getPost} key={post[1].id}/>
            ))}
        </Row>
    )
}

export default blogPosts
