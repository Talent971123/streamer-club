import * as t from "redux/types/match";

const matchReducer = (
    state = {
        info: {}, /** TODO: infer type */
        replay_list: [],
        live_list: []
    },
    action: any
) => {
    switch (action.type) {
        case t.SET_MATCH_INFO:
            return { ...state, info: action.payload };
        case t.SET_REPLAY_MATCHES:
            return { ...state, replay_list: action.payload };
        case t.SET_LIVE_MATCHES:
            return { ...state, live_list: action.payload };
        default:
            return { ...state };
    }
};

export default matchReducer;