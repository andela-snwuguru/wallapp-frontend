/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import Post from './Post';
import Loader from 'react-loader-advanced';
import { connect } from 'react-redux';
import { getPosts } from '../actions/WallActions';


class PostList extends Component {
    componentWillMount(){
        this.props.dispatch(getPosts());
    }
  render() {
    return (
        <Loader show={this.props.requesting_posts} message={'Loading...'}>
            {this.props.posts.map((post)=>{ return <Post post={post} key={post.id} />})}
        </Loader>
    );
  }
}

PostList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  requesting_posts: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state, props) {
    return {
      requesting_posts: state.wall.requesting_posts,
      posts: state.wall.posts
    };
}

export default connect(mapStateToProps)(PostList);
