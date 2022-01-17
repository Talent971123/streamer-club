import React, { useState, ReactNode } from "react";
import { DateTimeSelect } from "./DateTimeInput.style";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Field } from "formik";
import slugify from "slugify";

const DateTimeInput = ({ onChange, name, ...rest }) => {
  const [state, setstate] = useState<any>(new Date());

  const onChangeDate = (date) => {
    setstate(date);
    onChange(moment(date).format());
  };

  return (
    <Field name={name} id={slugify(name)}>
      {({ field: { value }, form: { setFieldValue } }) => (
        <DateTimeSelect
          {...rest}
          showTimeSelect
          selected={state}
          value={value}
          onChange={(dt) => {
            onChangeDate(dt);
            setFieldValue(name, dt);
          }}
          dateFormat="MMM d, yyyy h:mm aa"
        />
      )}
    </Field>
  );
};

export default DateTimeInput;
