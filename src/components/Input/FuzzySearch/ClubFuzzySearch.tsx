import React, { useState } from 'react'
import { StyledFuzzySearch } from './FuzzySearch.style'
import { useSubscription } from "@apollo/client";
import { ADMINQL } from 'graphql/club';
import { Field } from "formik";
import slugify from 'slugify';

function ClubFuzzySearch({ name = "", ...rest }) {
    const [data, setData] = useState<Partial<Array<any>>>([]);
    useSubscription(ADMINQL.SUB_ALL_CLUBS, {
        onSubscriptionData({ subscriptionData: { data } }) {

            data.clubs && setData(data.clubs.map(club => ({
                value: club.name
            })));

        },
    });

    return (

        <Field name={name} id={slugify(name)} >
            {
                ({ field: { value }, form: { setFieldValue } }) => (
                    <StyledFuzzySearch
                        options={data}
                        placeholder="Opposition Club"
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

export default ClubFuzzySearch