/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Image, Button, Glyphicon, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

class Post extends Component {
  render() {
    return (
      <Panel>
        <Grid>
            <Row>
              <Col xs={4} md={1}>
                <Image src="/images/passport.jpg" thumbnail responsive />
              </Col>
              <Col xs={8} md={8}>
                  <Row>
                    <p className="pull-left">Nwuguru Sunday</p>
                  </Row>
                  <Row>
                    <p className="pull-left grey">19hr ago</p>
                  </Row>
              </Col>
            </Row>
            <Row>
                <Col xs={9} md={9}>
                    <p className="userContent">I am someone. I cannot sing. I cannot dance. I cannot entertain. I cannot win Head of House. I almost didn't win any of the games played today if not by chance. Common "Whot" that everybody can play, I cannot play. Who am I?</p>
                </Col>
            </Row>
            <Row>
                <Col xs={9} md={9}>
                    <Image src="/images/post.jpg" responsive />
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col xs={9} md={9}>

                    <ButtonToolbar>
                      <ButtonGroup bsSize="large">
                        <Button className="pull-left">
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
          </Grid>
      </Panel>
    );
  }
}

export default Post;