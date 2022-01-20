import React, { useState } from 'react'
import { StyledFuzzyDropDownSearch } from './FuzzySearch.style'
import { useSubscription } from "@apollo/client";
import { ADMINQL } from 'graphql/club';
import _ from 'lodash'
import { Field } from "formik"; //TODO: Refactor please use antd form
import slugify from 'slugify';

const { Option } = StyledFuzzyDropDownSearch;

function TeamFuzzySearch({ name, club_id = 0, ...rest }) {
    const [data, setData] = useState<Partial<Array<any>>>([]);

    const where = club_id ? { "where": { "club_id": { "_eq": club_id } } } : {}

    useSubscription(ADMINQL.SUB_ALL_TEAMS, {
        variables: { ...where },
        onSubscriptionData({ subscriptionData: { data } }) {
            data.teams && setData(data.teams)
        },
    });

    return (
        <Field name={name} id={slugify(name)} >
            {
                ({ field: { value }, form: { setFieldValue } }) => (
                    <StyledFuzzyDropDownSearch
                        {...rest}
                        showSearch
                        placeholder="Opposition Team"
                        filterOption={(input, option) =>
                            option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        onChange={(val => { setFieldValue(name, val) })}
                    >
                        {club_id && data.map((team, i) => (<Option value={team.id} key={`dd-team-fuzzy-${i}`}>{team.name}</Option>))}
                    </StyledFuzzyDropDownSearch>
                )
            }

        </Field>
    )
}

export default TeamFuzzySearch