/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import {Panel, Grid, Row, Col, Image, Button, Glyphicon, ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import PostActionButton from './PostActionButton';
import Comments from './Comments';
import {isLogged} from '../Utils';
import { connect } from 'react-redux';


class Post extends Component {
    getPostImage(post){
        if(post.image)
            return <Image src={post.image}  responsive />
        return null;
    }
    getUserImage(post){
        return <Glyphicon glyph="user" style={{fontSize: 55}}/>
    }

    getDate(post){
        const d = new Date(post.date_created);
        return d.toDateString()
    }
  render() {
      const {post, index} = this.props;
    return (
      <Panel>
        <Grid>
            <Row>
              <Col xs={4} md={1}>
                  {this.getUserImage(post)}
              </Col>
              <Col xs={8} md={8}>
                  <Row>
                    <p className="pull-left">{post.user.username}</p>
                  </Row>
                  <Row>
                    <p className="pull-left grey">{this.getDate(post)}</p>
                  </Row>
              </Col>
            </Row>
            <Row>
                <Col xs={9} md={9}>
                    <p className="userContent">
                        {post.message}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={9} md={9}>
                    {this.getPostImage(post)}
                </Col>
            </Row>
            { !isLogged() ? "" : <PostActionButton post={post} postIndex={index} />}
             <hr/>
            <Comments />
            <Comments />
          </Grid>
      </Panel>
    );
  }
}


Post.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
      user: state.auth.user
    };
}

export default connect(mapStateToProps)(Post);
