import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {List} from './List';

export function Result(props){
    function back(){
        props.setRender('form')
        props.setErr(null);
    }

    return(
        <Card.Body>
            {(props.err) ? props.err.toString() : null}
            {props.loading ? <p>Loading</p> : <List data = {props.data}/>}
            <Button variant="primary" onClick = {back}>Back</Button>
        </Card.Body>
    )
}