import { Form, Button, InputGroup} from 'react-bootstrap';
import CustomButton from './CustomButton';
import { useState } from 'react';

function Add({ onAdd }) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        console.log('submit called')
        e.preventDefault() //prevent submitting to the page

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text, day});
        setText('');
        setDay('');
    }

    return (
        <Form onSubmit={onSubmit}>
            <InputGroup className="mb-3" >
                <InputGroup.Text id="basic-addon1">Enter Task Here</InputGroup.Text>
                <Form.Control as='input' type="text" placeholder="Task:" 
                value={text} onChange={(e) => setText(e.target.value)} />
            </InputGroup>

            <InputGroup className="mb-3" >
                <InputGroup.Text id="basic-addon1">Enter Date Here</InputGroup.Text>
                <Form.Control as='input' type="text" placeholder="Date:" 
                value={day} onChange={(e) => setDay(e.target.value)} />
            </InputGroup>

            <Button as='input' type='submit' value='Submit' variant='primary'></Button>
        </Form>
    )
}

export default Add
