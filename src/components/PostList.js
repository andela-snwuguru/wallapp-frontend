/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Post from './Post';


class PostList extends Component {
  render() {
    return (
        <div>
            <Post />
            <Post />
            <Post />
        </div>
    );
  }
}

export default PostList;