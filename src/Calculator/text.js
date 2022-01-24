import { Card } from 'react-bootstrap';
import { useState } from 'react';


function text({number}) {
    return (
        <div>
            <Card className='py-3 px-2 me-4 font-weight-bold' bg='info' text='light'><h2>{number}</h2></Card>
        </div>
    )
}

export default text
