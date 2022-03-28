import { useQuery } from "@apollo/client";
import { query } from "graphql/stream";
import _ from 'lodash';
import React, { useState, useContext } from 'react';
import {
    DropdownContainer,
    StyledFormItem
} from "../commentary.style";

import { EventContext } from "../components/EventAction";
import { useSelector, RootStateOrAny } from "react-redux";

interface Props {
    type: "scoring" | "keyMoments" | ""
    initialValue?: any
    name: string
}

interface EventCollectionTypes {
    id: number
    event_name: string
    sports_id: number
    scoring: number | null
}

const EventsDropDown: React.FC<Props> = ({ type, initialValue, name }) => {
    let { site: { eventsList, currentSport } } = useSelector((state: RootStateOrAny) => state);
    eventsList = eventsList.filter(data => data.sports_id === currentSport.id)

    const { Option } = DropdownContainer;

    const scoringOptions = () => {
        const options = _.filter(eventsList, (o) => (!_.isNull(o.scoring)))
        return options.map((item: EventCollectionTypes, index: number) => (
            <Option value={item.id} key={`event-dd-commentary-${index}`}>
                {`${item.event_name} + ${item.scoring}`}
            </Option>
        ))
    }

    const eventsOptions = () => {
        const options = _.filter(eventsList, (o) => (_.isNull(o.scoring)))
        return options.map((item: EventCollectionTypes, index: number) => (
            <Option value={item.id} key={`event-dd-commentary-${index}`}>
                {item.event_name}
            </Option>
        ))
    }

    return (
        <StyledFormItem name={name} initialValue={initialValue} required >
            <DropdownContainer placeholder="Confirm Event (Mandatory)">
                {type === "scoring" ? scoringOptions() : eventsOptions()}
            </DropdownContainer>
        </StyledFormItem>
    )

}

export default EventsDropDown