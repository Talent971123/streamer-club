import * as t from "redux/types/teams";

const teamsReducer = (
    state = {
        list: {} /** TODO: infer type */
    },
    action: any
) => {

    switch (action.type) {
        case t.SET_TEAMS_INFO:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return { ...state };
    }
};

export default teamsReducer;