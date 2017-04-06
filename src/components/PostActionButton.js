/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Row, Col, Button, Glyphicon, ButtonToolbar, ButtonGroup, Form, FormGroup, FormControl} from 'react-bootstrap';
import { connect } from 'react-redux';
import {newPostLike} from '../actions/WallActions';
import Comments from './Comments';


class PostActionButton extends Component {
    constructor(){
        super();
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.state = {
            showForm: false
        }
    }
    
    handleLikeClick(){
        this.props.dispatch(newPostLike(this.props.post, this.props.postIndex));
    }

  render() {
    return (
      <Row>
          <hr/>
        <Col xs={9} md={9}>

            <ButtonToolbar>
              <ButtonGroup bsSize="large">
                <Button className="pull-left" onClick={this.handleLikeClick}>
                    <Glyphicon glyph="thumbs-up" /> Like ({this.props.post.likes.length})
                </Button>
                <Button className="pull-left" onClick={()=>{ this.setState({showForm: this.state.showForm ? false : true })  }}>
                    <Glyphicon glyph="comment" /> Comment (23)
                </Button>
                <Button className="pull-left">
                    <Glyphicon glyph="share" /> Share (10)
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
            <div style={{display: this.state.showForm ? "block": "none" }}>
            <hr/>
            <Comments />
            <Comments />
            <br/>
            <Col xs={9} md={9}>
                <Form onSubmit="" >
                    <FormGroup>
                      <FormControl componentClass="textarea" required value={""} onChange={(e)=>{ this.setState({message: e.target.value}) }}/>
                    </FormGroup>

                    <Button type="submit" bsStyle="primary" className="pull-right">comment</Button>
                </Form>
            </Col>
            </div>
        </Col>
    </Row>
    );
  }
}


PostActionButton.propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    postIndex: PropTypes.number.isRequired,
    sending_like: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
    return {
      sending_like: state.wall.sending_like
    };
}


export default connect(mapStateToProps)(PostActionButton);

