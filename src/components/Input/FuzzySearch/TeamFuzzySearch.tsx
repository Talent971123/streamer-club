import React, { useState } from 'react'
import { StyledFuzzySearch } from './FuzzySearch.style'
import { useSubscription } from "@apollo/client";
import { ADMINQL } from 'graphql/club';
import _ from 'lodash'
import { Field } from "formik";
import slugify from 'slugify';

function TeamFuzzySearch({ name, ...rest }) {
    const [data, setData] = useState<Partial<Array<any>>>([]);

    useSubscription(ADMINQL.SUB_ALL_TEAMS, {
        onSubscriptionData({ subscriptionData: { data } }) {
            data.teams && setData(
                _.uniqBy(
                    data.teams.map(team => ({
                        value: team.name
                    })),
                    'value'
                )
            );
        },
    });

    return (
        <Field name={name} id={slugify(name)} >
            {
                ({ field: { value }, form: { setFieldValue } }) => (
                    <StyledFuzzySearch
                        options={data}
                        placeholder="Opposition Team"
                        onChange={(val => { setFieldValue(name, val) })}
                        filterOption={(inputValue, option) =>
                            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                )
            }

        </Field>
    )
}

export default TeamFuzzySearch