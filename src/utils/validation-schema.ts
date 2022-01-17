import * as Yup from "yup";
//  validation for Player form
export const PlayerSchema = Yup.object().shape({
  first_name: Yup.string().required("FirstName must required."),
  last_name: Yup.string().required("LastName must required."),
  mobile: Yup.string()
    .typeError("That doesn't look like a phone number")
    .required("PhoneNumber is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone Number is not valid"
    ),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
});
// ---- end
