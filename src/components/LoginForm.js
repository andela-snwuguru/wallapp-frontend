/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Form, Button, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';
import Loader from 'react-loader-advanced';
import {requestUserLogin} from '../actions/AuthActions';


class LoginForm extends Component {
    constructor(){
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            username: "",
            password: ""
        }
    }

    submitHandler(e){
        e.preventDefault();
        this.props.dispatch(requestUserLogin(this.state));
        this.props.closeModal();
    }

  render() {
    return (
        <Loader show={false} message={'Processing'}>
            <Form horizontal onSubmit={this.submitHandler} id="login-form">
                <FormGroup controlId="username">
                  <Col componentClass={ControlLabel} sm={2}>
                    Username
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" id="username" placeholder="Username" required value={this.state.username} onChange={(e)=>{ this.setState({username:e.target.value})}}/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="password">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" id="password" placeholder="Password" required value={this.state.password} onChange={(e)=>{ this.setState({password:e.target.value})}}/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit" className="pull-right" id="login-submit">
                      Login
                    </Button>
                  </Col>
                </FormGroup>
            </Form>
        </Loader>
    );
  }
}


LoginForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};


export default LoginForm;