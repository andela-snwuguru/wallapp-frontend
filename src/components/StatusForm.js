/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Panel, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import {isLogged} from '../Utils';
import AuthModal from './AuthModal';
import { connect } from 'react-redux';
import Loader from 'react-loader-advanced';
import {postNewMessage} from '../actions/WallActions';



class StatusForm extends Component {
    constructor(){
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            message: ""
        }
    }

    submitHandler(e){
        e.preventDefault();
        this.props.dispatch(postNewMessage(this.state));
        this.setState({message:""});
    }

    render() {
        if(!isLogged()){
          return (<AuthModal/>);
        }

        return (
            <Loader show={this.props.sending_post} message={'Please wait...'}>
                <Panel>
                    <Form onSubmit={this.submitHandler}>
                        <FormGroup controlId="message">
                          <FormControl componentClass="textarea" placeholder="What's on your mind?" required value={this.state.message} onChange={(e)=>{ this.setState({message: e.target.value}) }}/>
                        </FormGroup>
                        <Button type="submit" bsStyle="primary" className="pull-right">Post</Button>
                    </Form>
                </Panel>
            </Loader>
        );
    }
}

StatusForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sending_post: PropTypes.bool.isRequired
};

function mapStateToProps(state, props) {
    return {
      sending_post: state.wall.sending_post,
      user: state.auth.user
    };
}

export default connect(mapStateToProps)(StatusForm);