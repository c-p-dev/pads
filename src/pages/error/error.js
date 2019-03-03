import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, Form } from 'react-bootstrap';



export default class ErrorPage extends React.Component {

    render() {
        return (
            <div class="header">
                {/* <Header /> */}
                <div class="container text-center mt-5 p-5">
                    <div class="col-12 pt-5">
                        <h1>¯\_(ツ)_/¯</h1>
                    </div>
                    <div class="col-12">
                        <h3> This page is not available. </h3>
                    </div>
                    
                </div>
            </div>

        );

    }

}


