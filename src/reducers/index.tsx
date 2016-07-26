import { combineReducers } from "redux"
import { IStore } from ".././store"

import user from "./user-reducer"

const storeData: IStore = {
  user,
}

export default combineReducers(storeData)
