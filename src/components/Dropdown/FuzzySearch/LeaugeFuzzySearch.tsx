import React, { useState } from 'react'
import { StyledFuzzyDropDownSearch } from './FuzzySearch.style'
import { useSubscription } from "@apollo/client";
import { ADMINQL } from 'graphql/club';
import { Field } from "formik";
import slugify from 'slugify';

const { Option } = StyledFuzzyDropDownSearch;

function LeaugeFuzzySearch({ name = "", ...rest }) {
    const [data, setData] = useState<Partial<Array<any>>>([]);

    useSubscription(ADMINQL.SUB_ALL_LEAGUES, {
        onSubscriptionData({ subscriptionData: { data } }) {
            data.leagues && setData(data.leagues)
        },
    });

    return (

        <Field name={name} id={slugify(name)} >
            {
                ({ field: { value }, form: { setFieldValue } }) => (
                    <StyledFuzzyDropDownSearch
                        {...rest}
                        showSearch
                        placeholder="League Name"
                        filterOption={(input, option) =>
                            option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        onChange={(val => { setFieldValue(name, val) })}
                    >
                        {data.map((league, i) => (<Option value={league.id} key={`dd-league-fuzzy-${i}`}>{league.name}</Option>))}
                    </StyledFuzzyDropDownSearch>
                )
            }
        </Field>

    )

}

export default LeaugeFuzzySearch