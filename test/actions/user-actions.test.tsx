import expect from 'expect'
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'

import reducers from '../../src/reducers/';


import { setUserName, getUser, GET_USERS, SET_USER_NAME, GET_USERS_PENDING, GET_USERS_FULFILLED, GET_USERS_REJECTED } from '../.././src/actions/user-actions'

const middlewares = [promise(), thunk]
const mockStore = configureMockStore(middlewares)

export const changeName = describe('user actions', function () {

  afterEach(() => {
    nock.cleanAll()
  })

  it('should change name', () => {
    expect(setUserName("Alp !!!")).toEqual({
      type: SET_USER_NAME,
      payload: "Alp !!!"
    })
  })

  it('should get User', () => {
    nock('http://rest.learncode.academy')
      .get('/api/alpgiray/getusers')
      .reply(200, {
        data: [
          {
            "age": "27",
            "id": "579a0258f1f6720100c951de",
            "name": "Alp"
          }
        ]
      })

    const expectedActions = [
      { type: GET_USERS_PENDING },
      {
        type: GET_USERS_FULFILLED,
        payload: {
          data: [
            {
              "age": "27",
              "id": "579a0258f1f6720100c951de",
              "name": "Alp"
            }
          ]
        }
      }
    ]

    const store = mockStore({ user: {} })

    return store.dispatch(getUser())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
  })
})
