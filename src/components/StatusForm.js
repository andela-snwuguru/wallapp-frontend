/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Panel, FormGroup, FormControl, Button} from 'react-bootstrap';
import {isLogged} from '../Utils';
import AuthModal from './AuthModal';


class StatusForm extends Component {
  render() {
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

export default StatusForm;