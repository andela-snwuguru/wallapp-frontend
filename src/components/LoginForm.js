/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Form, Button, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';


class LoginForm extends Component {
  render() {
    return (
        <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Username
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Username" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
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
    );
  }
}

export default LoginForm;