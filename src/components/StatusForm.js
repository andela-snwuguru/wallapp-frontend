/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Panel, FormGroup, FormControl, Button} from 'react-bootstrap';

class StatusForm extends Component {
  render() {
    return (
      <Panel>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" placeholder="What's on your mind?" />
        </FormGroup>
        <Button bsStyle="primary pull-right">Post</Button>
      </Panel>
    );
  }
}

export default StatusForm;