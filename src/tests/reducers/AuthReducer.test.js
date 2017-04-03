/**
 * Created by sundayguru on 02/04/2017.
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {Config} from '../../Utils';
import * as actions from '../../actions/AuthActions';
import nock from 'nock';
import expect from 'expect';


const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('User authentications', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('requestUserLogin creates RECEIVE_USER_DATA after success login', () => {
      const mock_response = {
          "user":{
              "username":"tester","email":"test@test.com",
              "is_active":true,"first_name":"tester",
              "last_name":"tester"
          }
      };
    nock(Config.domain)
      .post('/api/login/')
      .reply(200, mock_response);

    const expectedActions = [
      { type: actions.LOGIN_USER,  payload: undefined },
      { type: actions.RECEIVE_USER_DATA, payload: mock_response.user }
    ];
    const store = mockStore({ user: {}, requesting: false });

    return store.dispatch(actions.requestUserLogin({"username":"tester", "password":"test"}))
      .then(() => { 
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

  it('requestUserRegister creates SIGNUP_USER_SUCCESS, RECEIVE_USER_DATA after success signup', () => {
      const mock_response = {
          "user":{
              "id": 1, "username":"tester", "email":"test@test.com",
              "is_active":true, "first_name":"tester",
              "last_name":"tester"
          }
      };
    nock(Config.domain)
      .post('/api/register/')
      .reply(200, mock_response.user);
    nock(Config.domain)
      .post('/api/login/')
      .reply(200, mock_response);
    const expectedActions = [
      { type: actions.SIGNUP_USER,  payload: undefined },
      { type: actions.SIGNUP_USER_SUCCESS,  payload: undefined },
      { type: actions.LOGIN_USER,  payload: undefined },
      { type: actions.RECEIVE_USER_DATA, payload: mock_response.user }
    ];
    const store = mockStore({ user: {}, requesting: false });

    return store.dispatch(actions.requestUserRegister({"username":"tester", "password":"test", "email":"test@test.com"}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

});