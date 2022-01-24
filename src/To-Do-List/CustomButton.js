import {Button} from 'react-bootstrap';
import propTypes from 'prop-types';



function CustomButton(props) {

    return (
        <Button onClick={props.onClick} variant={props.variant}>
            {props.text}
        </Button>
    )
}

Button.defaultProps = {
    text: 'Button',
    variant: 'primary', 
}

Button.propTypes = {
    text: propTypes.string,
    variant: propTypes.string,
    onClick: propTypes.func,
}

export default CustomButton
