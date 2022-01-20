import React, { useState } from 'react'
import { StyledFuzzySearch } from './FuzzySearch.style'
import { useSubscription } from "@apollo/client";
import { ADMINQL } from 'graphql/club';
import { Field } from "formik"; //TODO: Refactor please use antd form
import slugify from 'slugify';

function LeaugeFuzzySearch({ name = "", ...rest }) {
    const [data, setData] = useState<Partial<Array<any>>>([]);

    useSubscription(ADMINQL.SUB_ALL_LEAGUES, {
        onSubscriptionData({ subscriptionData: { data } }) {
            data.leagues && setData(data.leagues.map(league => ({
                value: league.name
            })));
        },
    });

    return (
        <Field name={name} id={slugify(name)} >
            {
                ({ field: { value }, form: { setFieldValue } }) => (
                    <StyledFuzzySearch
                        options={data}
                        placeholder="League Name"
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

export default LeaugeFuzzySearch