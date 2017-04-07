/**
 * Created by sundayguru on 03/04/2017.
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {Config} from '../../Utils';
import * as actions from '../../actions/WallActions';
import nock from 'nock';
import expect from 'expect';


const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Wall Posts', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('postNewMessage creates NEW_MESSAGE_POSTED after success post', () => {
      const mock_response = {
          id: 1,
          message: "test"
      };
    nock(Config.domain)
      .post('/api/walls/')
      .reply(200, mock_response);

    const expectedActions = [
      { type: actions.POST_NEW_MESSAGE,  payload: undefined },
      { type: actions.NEW_MESSAGE_POSTED, payload: mock_response }
    ];
    const store = mockStore({ posts: {}, requesting: false });

    return store.dispatch(actions.postNewMessage({"message":"test"}))
      .then(() => { 
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

  it('getPosts creates RECEIVE_POSTS after successful post fetch', () => {
      const mock_response = [{
          id: 1,
          message: "test"
      }];
    nock(Config.domain)
      .get('/api/walls/')
      .reply(200, mock_response);

    const expectedActions = [
      { type: actions.FETCH_POSTS,  payload: undefined },
      { type: actions.RECEIVE_POSTS, payload: mock_response }
    ];
    const store = mockStore({ posts: {}, requesting_posts: false });

    return store.dispatch(actions.getPosts())
      .then(() => { 
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

  it('newPostLike creates NEW_LIKE_POSTED after success', () => {
      const mock_response = {
          id: 1,
          postIndex: 0,
          user: {username: "test"}
      };
    nock(Config.domain)
      .post('/api/walls/1/likes/')
      .reply(200, mock_response);

    const expectedActions = [
      { type: actions.POST_NEW_LIKE,  payload: undefined },
      { type: actions.NEW_LIKE_POSTED, payload: mock_response }
    ];
    const store = mockStore({ posts: {}, sending_button_action: false });

    return store.dispatch(actions.newPostLike({id: 1}, 0))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
    
  it('newPostComment creates NEW_COMMENT_POSTED after success', () => {
      const mock_response = {
          id: 1,
          postIndex: 0,
          message: "test",
          user: {username: "test"}
      };
    nock(Config.domain)
      .post('/api/walls/1/comments/')
      .reply(200, mock_response);

    const expectedActions = [
      { type: actions.POST_NEW_COMMENT,  payload: undefined },
      { type: actions.NEW_COMMENT_POSTED, payload: mock_response }
    ];
    const store = mockStore({ posts: {}, sending_button_action: false });

    return store.dispatch(actions.newPostComment({id: 1}, 0))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

});