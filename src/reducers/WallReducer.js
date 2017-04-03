/**
 * Created by sundayguru on 01/04/2017.
 */

import * as actions from '../actions/WallActions';

let initialState = {
  requesting_posts : false,
  sending_post : false,
  posts : []
};

export function posts(state = initialState, action) {
  switch (action.type) {
    case actions.POST_NEW_MESSAGE:
      return Object.assign({}, state, {sending_post: true});

    case actions.NEW_MESSAGE_POSTED:
      return Object.assign({}, state, {sending_post: false, posts: state.posts.concat([action.payload])});
    
    case actions.NEW_MESSAGE_FAILED:
      return Object.assign({}, state, {sending_post: false});

    default:
      return state
  }
}