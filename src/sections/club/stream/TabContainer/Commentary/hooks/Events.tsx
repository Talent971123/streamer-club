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

  let { site: { eventsList, currentSport } } = useSelector((state: RootStateOrAny) => state);

  const [scoring, setScoring] = useState<Array<EventsTypes>>([])
  const [keyMoment, setKeyMoment] = useState<Array<EventsTypes>>([])

  useEffect(() => {
    eventsList = eventsList.filter(data => data.sports_id === currentSport.id)
    let result: EventsTypes[] = [];
    Scoring.forEach(item => {
      const event = _.find(eventsList, o => item.title.includes(o.event_name))
      if (event && event.id) {
        result.push({ title: item.title, value: event?.id, score: event?.scoring })
      }
    })
    setScoring(result)

    setKeyMoment(
      _.filter(eventsList, (o) => _.isNull(o.scoring)).map(v => ({ title: v.event_name, value: v.id, score: v.scoring }))
    )

  }, [eventsList])
  return { scoring, keyMoment }
}

export default useEvents