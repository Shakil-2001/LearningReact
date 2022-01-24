import { Button } from 'react-bootstrap';

import propTypes from 'prop-types';

function button({value, id, text, color, buttonClick}) {
    return (
        <Button className='my-3 py-3 custom' type='submit' value={value} id={id} variant={color} onClick={() => buttonClick({value})}>
            {text}
        </Button>
    )
}

export default button
