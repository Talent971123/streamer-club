import * as t from "redux/types/site";
import { EventCollectionTypes } from "types/common/site";

export interface SiteStateTypes {
    settings: any
    clubs: Array<any>
    eventsList: Array<EventCollectionTypes>
}

const siteReducer = (
    state: SiteStateTypes = {
        settings: {}, /** TODO: infer type */
        clubs: [],
        eventsList: []
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
        case t.SET_EVENT_LIST:
            return {
                ...state,
                eventsList: action.payload,
            };
        default:
            return { ...state };
    }
};

export default siteReducer;