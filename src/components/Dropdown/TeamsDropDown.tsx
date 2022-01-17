import React, { useState } from 'react'
import { AntSelect } from './dropdown'
import { useSubscription } from "@apollo/client";
import { useRouter } from "next/router";
import { HomeQL } from 'graphql/club';
import { Field } from "formik";
import slugify from 'slugify';

const { Option } = AntSelect;

function TeamsDropDown({ name = "", onChange, ...rest }) {
  const router = useRouter();
  const { club_slug } = router.query;

  const [data, setData] = useState<Partial<Array<any>>>([]);

  useSubscription(HomeQL.SUB_CLUB_TEAMS, {
    variables: {
      club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data.clubs[0] && setData(data.clubs[0].teams)
    },
  });

  return (<Field name={name} id={slugify(name)} >
    {
      ({ field: { value }, form: { setFieldValue } }) => (
        <AntSelect
          {...rest}
          placeholder="Select Team"
          filterOption={(input, option) =>
            option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={(val => { setFieldValue(name, val) })}
        >
          {data.map((team, i) => (<Option value={team.id} key={`dd-team-${i}`}>{team.name}</Option>))}
        </AntSelect>
      )
    }
  </Field>)

}

export default TeamsDropDown


