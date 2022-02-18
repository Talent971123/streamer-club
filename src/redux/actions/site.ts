import * as t from "redux/types/site";

export const setSiteSettings = (settings: any) => ({
    type: t.SET_SITE_SETTINGS,
    payload: settings,
})

export const setSiteClubs = (clubs: any) => ({
    type: t.SET_SITE_CLUBS,
    payload: clubs,
})