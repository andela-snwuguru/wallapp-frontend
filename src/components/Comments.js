/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Panel, Grid, Row, Col, Image, Button, Glyphicon, ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import { connect } from 'react-redux';


class Comments extends Component {

    getUserImage(){
        return <Glyphicon glyph="user" style={{fontSize: 55}}/>
    }

  render() {
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
                    <p className="pull-left">{"sunday"}</p>
                  </Row>
                  <Row>
                    <p className="pull-left grey">{"12/12/12"}</p>
                  </Row>
              </Col>
            </Row>
            <Row>
                <Col xs={9} md={9}>
                    <p className="userContent">
                        {"message"}
                    </p>
                </Col>
            </Row>
          </Grid>
      </Panel>
    </Col>
    );
  }
}



export default connect()(Comments);

