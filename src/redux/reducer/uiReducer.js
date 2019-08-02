import { TOGGLE_PROFESSION_MODE } from "../action/ui";

const initialState = {
    professionModeId: 0
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PROFESSION_MODE:
            return {
                ...state,
                professionModeId: action.payload
            };
        default:
            return state;
    }
}
