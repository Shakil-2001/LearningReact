import { Card, Container, Row, Col } from 'react-bootstrap';
import CustomButton from './CustomButton';


function Task({task, id, onDelete, onComplete}) {

    const onClick = () => (console.log('click'));

    return (
        <div>
            <Card className="my-2 py-2" bg={task.complete === true ? 'success': 'light'} >
                    <Container className="mx-2">
                        <Row>
                            <Col md={8}>
                                <Row>{task.text}</Row>
                                <Row>{task.day}</Row>
                            </Col>
        
                            <Col md={2}>
                                <CustomButton text="Remove" variant="danger" onClick={() => onDelete(task.id)}/>
                            </Col>
        
                            <Col md={2}>
                                <CustomButton text="Complete" variant="success" onClick={() => onComplete(task.id)}/>
                            </Col>
                        </Row>
                    </Container>
                </Card>
        </div>
    )
}

export default Task
