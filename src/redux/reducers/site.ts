import * as t from "redux/types/site";
import { EventCollectionTypes, SportType } from "types/common/site";

export interface SiteStateTypes {
    settings: any
    clubs: Array<any>
    eventsList: Array<EventCollectionTypes>
    currentSport: SportType | null
}

const siteReducer = (
    state: SiteStateTypes = {
        settings: {}, /** TODO: infer type */
        clubs: [],
        eventsList: [],
        currentSport: null
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

        case t.SET_SITE_SPORT:
            return {
                ...state,
                currentSport: action.payload
            }
        default:
            return { ...state };
    }
};

export default siteReducer;