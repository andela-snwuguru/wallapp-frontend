/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Panel, Form, FormGroup, FormControl, Button, Image, Col} from 'react-bootstrap';
import {isLogged} from '../Utils';
import AuthModal from './AuthModal';
import { connect } from 'react-redux';
import Loader from 'react-loader-advanced';
import {postNewMessage} from '../actions/WallActions';
import Dropzone from 'react-dropzone';


class StatusForm extends Component {
    constructor(){
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            message: "",
            image:""
        }
    }

    submitHandler(e){
        e.preventDefault();
        this.props.dispatch(postNewMessage(this.state));
        this.setState({message:"", image:""});
    }

    onDrop(files) {
        var reader = new FileReader();
        var that = this;
        reader.readAsDataURL(files[0]);
        reader.onload = function (fileLoadedEvent) {
            that.setState({image:fileLoadedEvent.target.result});
        };
    }

    onOpenClick() {
      this.dropzone.open();
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
                        <div>
                            <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop.bind(this)} style={{display:"none"}}></Dropzone>
                            <Button type="button" onClick={this.onOpenClick.bind(this)} bsStyle="default" className="pull-left">
                                Add Image
                            </Button>
                            {this.state.image ? <div>
                            <Col sm={8}><Image src={this.state.image}  thumbnail responsive /> </Col>
                            </div> : null}
                        </div>

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