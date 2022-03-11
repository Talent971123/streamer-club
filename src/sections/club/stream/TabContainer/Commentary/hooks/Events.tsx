import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { EventContext } from "../components/EventAction";
import { Scoring } from '../constants';
import { useSelector, RootStateOrAny } from "react-redux";

export interface EventsTypes {
    title: string
    value: number
    score?: number | null
}

function useEvents() {

    const { site: { eventsList } } = useSelector((state: RootStateOrAny) => state);

    const [scoring, setScoring] = useState<Array<EventsTypes>>([])
    const [keyMoment, setKeyMoment] = useState<Array<EventsTypes>>([])

    useEffect(() => {

        setScoring(
            Scoring.map(item => {
                const event = _.find(eventsList, o => item.title.includes(o.event_name))
                return { title: item.title, value: event.id, score: event.scoring }
            })
        )

        setKeyMoment(
            _.filter(eventsList, (o) => _.isNull(o.scoring)).map(v => ({ title: v.event_name, value: v.id, score: v.scoring }))
        )

    }, [eventsList])

    return { scoring, keyMoment }

}

export default useEvents