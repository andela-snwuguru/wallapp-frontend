/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Row, Col, Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { connect } from 'react-redux'
import {isLogged} from '../Utils';
import Loader from 'react-loader-advanced';


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
      const {requesting} = this.props;
    return (
        <Loader show={requesting} message={'Processing'}>
            <div>
                <p className="lead">Do you want to express yourself on the wall?</p>
                <Row>
                    <Col xs={12} md={6}>
                        <Button
                          bsStyle="primary"
                          bsSize="large"
                          className="btn-block no-radius"
                          onClick={this.openSignup}
                        >
                          Register
                        </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Button
                          bsStyle="primary"
                          className="btn-block  no-radius"
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
        </Loader>
    );
  }
}


AuthModal.propTypes = {
  user: PropTypes.object.isRequired,
  requesting: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};


function mapStateToProps(state, props) {
    return {
      user: state.user,
      requesting: state.requesting
    };
}

export default connect(mapStateToProps)(AuthModal);