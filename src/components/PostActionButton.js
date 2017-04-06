/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Row, Col, Button, Glyphicon, ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import { connect } from 'react-redux';
import {logoutUser} from '../actions/AuthActions';


class PostActionButton extends Component {
    constructor(){
        super();
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }
    
    handleLikeClick(){
        this.props.dispatch(logoutUser());
    }

  render() {
      console.log(this.props.store);
    return (
      <Row>
        <Col xs={9} md={9}>

            <ButtonToolbar>
              <ButtonGroup bsSize="large">
                <Button className="pull-left" onClick={this.handleLikeClick}>
                    <Glyphicon glyph="thumbs-up" /> Like (12)
                </Button>
                <Button className="pull-left">
                    <Glyphicon glyph="comment" /> Comment (23)
                </Button>
                <Button className="pull-left">
                    <Glyphicon glyph="share" /> Share (10)
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
        </Col>
    </Row>
    );
  }
}


PostActionButton.propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};


export default connect()(PostActionButton);

