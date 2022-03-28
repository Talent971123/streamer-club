import * as t from "redux/types/site";

export const setSiteSettings = (settings: any) => ({
    type: t.SET_SITE_SETTINGS,
    payload: settings,
})

export const setSiteClubs = (clubs: any) => ({
    type: t.SET_SITE_CLUBS,
    payload: clubs,
})

export const setSiteEvents = (events: any) => ({
    type: t.SET_EVENT_LIST,
    payload: events,
})

export const setSiteSport = (sport: any) => ({
    type: t.SET_SITE_SPORT,
    payload: sport,
})