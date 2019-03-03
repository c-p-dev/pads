import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Button, Form } from 'react-bootstrap';
import './login.scss';

import Header from '../../components/header/header';

export default class LoginPage extends React.Component {

    render() {

        return (
            <div class="header">
                {/* <Header /> */}
                <div class="container">
                    <LoginCard />
                </div>
            </div>

        );

    }

}

class LoginCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card className="login-card rounded">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    {/* <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text> */}
                    <LoginForm />
                    {/* <Button variant="primary">Test</Button> */}
                </Card.Body>
            </Card>
        );
    }

}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <div class="text-center p-4">
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Username</Form.Label> */}
                        {/* <Form.Text className="text-muted">
                        Username
                     </Form.Text> */}
                        <Form.Control type="text" placeholder="Username" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        {/* <Form.Text className="text-muted">
                        Username
                    </Form.Text> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div class="col-12 text-center" >
                        <Button variant="primary" type="submit" className="col-8 py-2">
                            Login
                    </Button>
                    </div>
                    <LoginLinks />
                </div>

            </Form>
        );
    }
}

class LoginLinks extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="row text-left py-5">
                {/* <a href="#" class="text-decoration-none col-12">Register</a> */}
                {/* <a href="#" class="text-decoration-none col-12">Forgot Password</a> */}
            </div>
            
        );
    }
}
