/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Panel, FormGroup, FormControl, Button} from 'react-bootstrap';
import {isLogged} from '../Utils';
import AuthModal from './AuthModal';
import { connect } from 'react-redux';


class StatusForm extends Component {

  render() {
      const {user} = this.props;
      if(!isLogged()){
          return (<AuthModal/>);
      }
    return (
      <Panel>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" placeholder="What's on your mind?" />
        </FormGroup>
        <Button bsStyle="primary" className="pull-right">Post</Button>
      </Panel>
    );
  }
}


function mapStateToProps(state, props) {
    return {
      user: state.auth.user,
      requesting: state.auth.requesting
    };
}

export default connect(mapStateToProps)(StatusForm);