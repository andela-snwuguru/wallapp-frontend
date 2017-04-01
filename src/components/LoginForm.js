/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Form, Button, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';
import Loader from 'react-loader-advanced';


class LoginForm extends Component {
  render() {
    return (
        <Loader show={false} message={'Processing'}>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Username
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Username" required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" required/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit" className="pull-right">
                      Login
                    </Button>
                  </Col>
                </FormGroup>
            </Form>
        </Loader>
    );
  }
}

export default LoginForm;