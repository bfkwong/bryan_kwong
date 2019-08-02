import { combineReducers } from "redux";

import uiReducer from "./uiReducer";
import enumReducer from "./enumReducer";

export default combineReducers({
    Ui: uiReducer,
    Enum: enumReducer
});
