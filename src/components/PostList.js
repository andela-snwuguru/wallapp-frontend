/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import Post from './Post';
import Loader from 'react-loader-advanced';


class PostList extends Component {
  render() {
    return (
        <Loader show={false} message={'Loading...'}>
            <Post />
            <Post />
            <Post />
        </Loader>
    );
  }
}

export default PostList;