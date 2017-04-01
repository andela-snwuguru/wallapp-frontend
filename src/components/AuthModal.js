/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Row, Col, Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {isLogged} from '../Utils';


class AuthModal extends Component {
    constructor() {
        super();
        this.close = this.close.bind(this);
        this.openLogin = this.openLogin.bind(this);
        this.openSignup = this.openSignup.bind(this);
        this.state =  { showModal: false, title:"Sign Up", form: <SignupForm /> };
    }

  close() {
    this.setState({ showModal: false });
  }

  openSignup() {
    this.setState({ showModal: true, title: "Sign Up", form: <SignupForm/> });
  }

  openLogin() {
    this.setState({ showModal: true, title: "Sign In", form: <LoginForm /> });
  }


  render() {
      const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );

        const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );
    return (
        <div>
            <p className="lead">Do you want to express yourself on the wall?</p>
            <Row>
                <Col xs={12} md={6}>
                    <Button
                      bsStyle="primary"
                      bsSize="large"
                      className="btn-block"
                      onClick={this.openSignup}
                    >
                      Register
                    </Button>
                </Col>
                <Col xs={12} md={6}>
                    <Button
                      bsStyle="primary"
                      className="btn-block"
                      bsSize="large"
                      onClick={this.openLogin}
                    >
                      Login
                    </Button>
                </Col>
            </Row>
            <hr/>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title className="text-center text-uppercase">{this.state.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {this.state.form}
              </Modal.Body>
            </Modal>
          </div>
    );
  }
}

export default AuthModal;