import * as t from "redux/types/players";

const playersReducer = (
    state = {
        list: [] /** TODO: infer type */
    },
    action: any
) => {

    switch (action.type) {
        case t.SET_PLAYERS_LIST:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return { ...state };
    }
};

export default playersReducer;