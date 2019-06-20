//React and hooks
import React, { useState } from 'react';

//Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//Api(fetch) calls
import {GetMessages, PostNew} from '../Api';

export function AppForm(props) {
    //Hooks for message
    const [message, setMessage] = useState('');
    const [submitMsg, setSubmitMsg] = useState(null);

    //Event triggers
    function messageChange(e) {
        setMessage(e.target.value)
    }

    //Message submit event
    function submitEvent() {
        PostNew(message)
        .then((res) => {
            if (res.status == 200){
                setSubmitMsg('Message Posted!')
            }
            else {
                setSubmitMsg('Error posting your message!')
            }
        })
    }

    //Show top ten event
    function showTopTen() {
        props.setLoading(true);
        props.setRender('results');
        GetMessages()
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            const result = []
            res.map((obj) => {
                result.push(obj.message);
            })
            return result;
        })
        .then((res) => {
            props.setData(res);
        })
        .then(() => props.setLoading(false))
        .catch((err) => {
            props.setErr(err);
        }); 
    }

    return (
        <Card.Body>
            <Card.Title>Leave your message, or see what's trending on Three Point Six.</Card.Title>
            <InputGroup>
                <FormControl
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon1"
                    value={message}
                    onChange={messageChange}
                />
            </InputGroup>
            <Button variant="primary" onClick = {showTopTen}>Trending</Button>
            <Button variant="primary" onClick = {submitEvent}>Submit</Button>
            <p>{submitMsg}</p>
        </Card.Body>
    )
}