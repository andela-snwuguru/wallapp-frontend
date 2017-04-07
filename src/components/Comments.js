/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Panel, Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import {stringifyDate} from '../Utils';


class Comments extends Component {

    getUserImage(){
        return <Glyphicon glyph="user" style={{fontSize: 55}}/>
    }
    
  render() {
      const {comment} = this.props;
    return (
      <Col xs={9}>
        <Panel>
        <Grid>
            <Row>
              <Col xs={4} md={1}>
                  {this.getUserImage()}
              </Col>
              <Col xs={8} md={8}>
                  <Row>
                    <p className="pull-left">{comment.user.username}</p>
                  </Row>
                  <Row>
                    <p className="pull-left grey">{stringifyDate(comment.date_created)}</p>
                  </Row>
              </Col>
            </Row>
            <Row>
                <Col xs={9} md={9}>
                    <p className="userContent">
                        {comment.message}
                    </p>
                </Col>
            </Row>
          </Grid>
      </Panel>
    </Col>
    );
  }
}


Comments.propTypes = {
  comment: PropTypes.object.isRequired,
};


export default connect()(Comments);

