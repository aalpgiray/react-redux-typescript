import { Store, Action } from "redux"
import axios from "axios"

interface ILogConfig {
    logServiceUrl: string;
}

interface IAction extends Action {
    payload: any;
}

interface ILogData {
    time: Date
    actionType?: string;
    actionPayload?: string;
    state: any;
}

export const logger = (config: ILogConfig) => (store: Store<any>) => next => (action: IAction) => {
    next(action);

    let state = store.getState();

    let log: ILogData = {
        time: new Date(),
        actionType: JSON.stringify(action.type),
        actionPayload: JSON.stringify(action.payload),
        state: JSON.stringify(state)
    }

    axios.post(config.logServiceUrl, log);
}