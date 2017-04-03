/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Form, Button, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';
import Loader from 'react-loader-advanced';
import {requestUserRegister} from '../actions/AuthActions';


class SignupForm extends Component {
    constructor(){
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    }

    submitHandler(e){
        e.preventDefault();
        if(this.state.password !== this.state.confirm_password){
            alert("Password mismatch");
            return;
        }
        this.props.dispatch(requestUserRegister(this.state));
        this.props.closeModal();
    }


  render() {
    return (
        <Loader show={false} message={'Processing'}>
            <Form horizontal onSubmit={this.submitHandler}>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    First Name
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="First Name" required value={this.state.first_name} onChange={(e)=>{ this.setState({first_name:e.target.value})}}/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    Last Name
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="Last Name" required value={this.state.last_name} onChange={(e)=>{ this.setState({last_name:e.target.value})}}/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    Username
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="Username" required value={this.state.username} onChange={(e)=>{ this.setState({username:e.target.value})}}/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4}>
                    Email
                  </Col>
                  <Col sm={8}>
                    <FormControl type="email" placeholder="Email" required value={this.state.email} onChange={(e)=>{ this.setState({email:e.target.value})}}/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={4}>
                    Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" required value={this.state.password} onChange={(e)=>{ this.setState({password:e.target.value})}}/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    Confirm Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Confirm Password" required value={this.state.confirm_password} onChange={(e)=>{ this.setState({confirm_password:e.target.value})}}/>
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