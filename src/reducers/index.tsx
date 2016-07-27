import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import { IStore } from ".././store"

import user from "./user-reducer"

const storeData: IStore = {
  user,
  routing: routerReducer
}

export default combineReducers(storeData)
