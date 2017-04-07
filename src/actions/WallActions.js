/**
 * Created by sundayguru on 03/04/2017.
 */

import {post, get, eventAction, error, success} from '../Utils';
export const POST_NEW_MESSAGE = "POST_NEW_MESSAGE";
export const POST_NEW_LIKE = "POST_NEW_LIKE";
export const POST_NEW_COMMENT = "POST_NEW_COMMENT";
export const NEW_LIKE_POSTED = "NEW_LIKE_POSTED";
export const NEW_COMMENT_POSTED = "NEW_COMMENT_POSTED";
export const NEW_MESSAGE_POSTED = "NEW_MESSAGE_POSTED";
export const NEW_MESSAGE_FAILED = "NEW_MESSAGE_FAILED";
export const FETCH_POSTS = "FETCH_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";


export function postNewMessage(data) {
    return dispatch => {
      dispatch(eventAction(POST_NEW_MESSAGE));
      return post("walls/", data, true).then(payload => {
            if (payload.id) {
                success("Message successful");
                return dispatch(eventAction(NEW_MESSAGE_POSTED, payload));
            }
          error("Unable to post message :(");
          dispatch(eventAction(NEW_MESSAGE_FAILED));
      });
    };
}


export function newPostLike(postData, postIndex) {
    return dispatch => {
        dispatch(eventAction(POST_NEW_LIKE));
            console.log("walls/"+postData.id+"/likes/");

      return post("walls/"+postData.id+"/likes/", {}, true).then(payload => {
            if (payload.id) {
                payload.postIndex = postIndex;
                return dispatch(eventAction(NEW_LIKE_POSTED, payload));
            }else{
                if(payload.error){
                    error("You've liked this post");
                }
            }
      });
    };
}

export function newPostComment(postData, postIndex, message) {
    return dispatch => {
        dispatch(eventAction(POST_NEW_COMMENT));
      return post("walls/"+postData.id+"/comments/", {message: message}, true).then(payload => {
            if (payload.id) {
                payload.postIndex = postIndex;
                success("Comment sent!");
                return dispatch(eventAction(NEW_COMMENT_POSTED, payload));
            }
            error("Something went wrong");
      });
    };
}


export function getPosts() {
    return dispatch => {
      dispatch(eventAction(FETCH_POSTS));
      return get("walls/").then(payload => {
          dispatch(eventAction(RECEIVE_POSTS, payload));
      });
    };
}
