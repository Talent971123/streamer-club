import * as t from "redux/types/club";

const clubReducer = (
    state = {
        info: {} /** TODO: infer type */
    },
    action: any
) => {

    switch (action.type) {
        case t.SET_CLUB_INFO:
            return {
                ...state,
                info: action.payload,
            };
        default:
            return { ...state };
    }
};

export default clubReducer;