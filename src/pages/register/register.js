import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Button, Form } from 'react-bootstrap';
import './register.scss';

import Header from '../../components/header/header';

export default class RegisterPage extends React.Component {

    render() {

        return (
            <div class="header">
                {/* <Header /> */}
                <div class="container">
                    <RegisterCard />
                </div>
            </div>

        );

    }

}

class RegisterCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card className="register-card rounded">
                <Card.Header>Register</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    {/* <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text> */}
                    <RegisterForm />
                    {/* <Button variant="primary">Test</Button> */}
                </Card.Body>
            </Card>
        );
    }

}

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     username:'',
        //     email:'',
        //     password: ''
        // };

        // this.state = { validated: false };
        this.state = { 
            'input_name': '',
            'selected_fruit': 'fruti1'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this
    }

    handleInputChange(event) {
        // const target = event.target;
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleChange(event){
        // this.setState({value: event.target.value});
        const targetName = event.target.name;
        this.setState({
            [targetName] : event.target.value
        })
    }
    handleSubmit(event) {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        // this.setState({ validated: true });
        event.preventDefault();
        console.log(this.state);
        // this.setState({value : event.target.value});
    }

    render() {
        const { validated } = this.state;
        return (
            // <Form 
            //     noValidate
            //     validated={validated}
            //     onSubmit={e => this.handleSubmit(e)}
            // >
            //     <div class="text-center p-4">
            //         <Form.Group controlId="formBasicUsername">
            //             {/* <Form.Label>Username</Form.Label> */}
            //             {/* <Form.Text className="text-muted">
            //             Username
            //          </Form.Text> */}
            //             <Form.Control
            //                 required 
            //                 type="text" 
            //                 placeholder="Username" 
            //             />
            //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            //         </Form.Group>

            //         <Form.Group controlId="formBasicEmail">
            //             {/* <Form.Label>Username</Form.Label> */}
            //             {/* <Form.Text className="text-muted">
            //             Username
            //          </Form.Text> */}
            //             <Form.Control 
            //                 required
            //                 type="email" 
            //                 placeholder="Email" />
            //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            //         </Form.Group>

            //         <Form.Group controlId="formBasicPassword">
            //             {/* <Form.Label>Password</Form.Label> */}
            //             {/* <Form.Text className="text-muted">
            //             Username
            //         </Form.Text> */}
            //             <Form.Control 
            //                 required
            //                 type="password" 
            //                 placeholder="Password" />
            //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            //         </Form.Group>
            //         <Form.Group controlId="formBasicGender">
            //             <div className="mb-3">
            //                 <Form.Check inline label="1" type="radio" id="gender1" value="male" />
            //                 <Form.Check inline label="2" type="radio" id="gender2" value="female" />
            //             </div>
            //         </Form.Group>
            //         <div class="col-12 text-center" >
            //             <Button variant="primary" type="submit" className="col-8 py-2">
            //                 Register
            //             </Button>
            //         </div>
            //     </div>
            // </Form>
            // <form onSubmit={this.handleSubmit}>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
              <input type="text" value={this.state.value} name="input_name" onChange={this.handleChange} />
                </label>
                Pick your favortie flavor:
                <select  onChange={this.handleChange} name="selected_fruit">
                    <option value="fruti1">fruit1</option>
                    <option value="calamansi">calamansi</option>
                    <option selected value="orange">orange</option>
                </select>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}

