import * as t from "redux/types/players";

export const setPlayerList = (players: any) => ({
    type: t.SET_PLAYERS_LIST,
    payload: players,
})