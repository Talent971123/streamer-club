import React, { useState } from 'react'
import { StyledFuzzyDropDownSearch } from './FuzzySearch.style'
import { useSubscription } from "@apollo/client";
import { ADMINQL } from 'graphql/club';
import { Field } from "formik";
import slugify from 'slugify';

const { Option } = StyledFuzzyDropDownSearch;

function ClubFuzzySearch({ name = "", onChange, ...rest }) {
    const [data, setData] = useState<Partial<Array<any>>>([]);
    useSubscription(ADMINQL.SUB_ALL_CLUBS, {
        onSubscriptionData({ subscriptionData: { data } }) {
            data.clubs && setData(data.clubs)
        },
    });

    return (
        <Field name={name} id={slugify(name)} >
            {
                ({ field: { value }, form: { setFieldValue } }) => (
                    <StyledFuzzyDropDownSearch
                        {...rest}
                        showSearch
                        placeholder="Opposition Club"
                        filterOption={(input, option) =>
                            option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        onChange={(val => { onChange(val); setFieldValue(name, val); })}
                    >
                        {data.map((club, i) => (<Option value={club.id} key={`dd-club-fuzzy-${i}`}>{club.name}</Option>))}
                    </StyledFuzzyDropDownSearch>
                )
            }
        </Field>
    )

}

export default ClubFuzzySearch