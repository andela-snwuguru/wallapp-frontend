/**
 * Created by sundayguru on 01/04/2017.
 */

import * as actions from '../actions/WallActions';

let initialState = {
  requesting_posts : false,
  sending_post : false,
  sending_button_action : false,
  posts : []
};

export function posts(state = initialState, action) {
  switch (action.type) {
    case actions.POST_NEW_MESSAGE:
      return Object.assign({}, state, {sending_post: true});
    
    case actions.POST_NEW_LIKE:
      return Object.assign({}, state, {sending_button_action: true});

    case actions.NEW_MESSAGE_POSTED:
      return Object.assign({}, state, {sending_post: false, posts: [action.payload].concat(state.posts)});
    
    case actions.NEW_MESSAGE_FAILED:
      return Object.assign({}, state, {sending_post: false});

    case actions.FETCH_POSTS:
      return Object.assign({}, state, {requesting_posts: true});

    case actions.RECEIVE_POSTS:
      return Object.assign({}, state, {requesting_posts: false, posts: action.payload});

    case actions.NEW_LIKE_POSTED:
        state.posts[action.payload.postIndex].likes.push(action.payload);
      return Object.assign({}, state, {sending_button_action: false});

    default:
      return state
  }
}