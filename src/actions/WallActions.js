/**
 * Created by sundayguru on 03/04/2017.
 */

import {Config, post, eventAction} from '../Utils';

export const POST_NEW_MESSAGE = "POST_NEW_MESSAGE";
export const NEW_MESSAGE_POSTED = "NEW_MESSAGE_POSTED";
export const NEW_MESSAGE_FAILED = "NEW_MESSAGE_FAILED";


export function postNewMessage(data) {
    return dispatch => {
      dispatch(eventAction(POST_NEW_MESSAGE));
      return post("walls/", data, true).then(payload => {
            if (payload.id) {
                return dispatch(eventAction(NEW_MESSAGE_POSTED, payload));
            }
          dispatch(eventAction(NEW_MESSAGE_FAILED));
      });
    };
}
