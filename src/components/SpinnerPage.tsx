import React from 'react'
import { Spinner } from 'react-bootstrap'


const SpinnerPage: React.FC = () => {
    return (
        <>
            <h1 className="text-center">
                <Spinner animation="border" as="span"></Spinner></h1>
            
        </>
    )
}


export default SpinnerPage