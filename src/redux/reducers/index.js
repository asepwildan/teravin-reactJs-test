import { combineReducers } from "redux";
import stepBarReducer from "./get-step-bar";
import getPersonalDataReducer from "./get-personal-data";
const rootReducer = combineReducers({
    stepBarReducer,
    getPersonalDataReducer,
});

export default rootReducer;
