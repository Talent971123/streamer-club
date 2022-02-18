import * as t from "redux/types/site";

const siteReducer = (
    state = {
        settings: {}, /** TODO: infer type */
        clubs: []
    },
    action: any
) => {

    switch (action.type) {
        case t.SET_SITE_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            };
        case t.SET_SITE_CLUBS:
            return {
                ...state,
                clubs: action.payload,
            };
        default:
            return { ...state };
    }
};

export default siteReducer;