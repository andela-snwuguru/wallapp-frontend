/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Form, Button, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';
import Loader from 'react-loader-advanced';


class SignupForm extends Component {
    constructor(){
        super()
        this.state = {
            loaded: false
        }
    }

  render() {
    return (
        <Loader show={false} message={'Processing'}>
            <Form horizontal>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    First Name
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="First Name" required/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    Last Name
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="Last Name" required/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    Username
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="Username" required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4}>
                    Email
                  </Col>
                  <Col sm={8}>
                    <FormControl type="email" placeholder="Email" required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={4}>
                    Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" required/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    Confirm Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Confirm Password" required/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={4} sm={8}>
                    <Button type="submit" className="pull-right">
                      Register
                    </Button>
                  </Col>
                </FormGroup>
            </Form>
        </Loader>
    );
  }
}

export default SignupForm;