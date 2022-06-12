import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={({confirmPassword, ...values}, { resetForm }) => {
          console.log(values);
          resetForm()
            
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "Accept terms and conditions"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(10, "Password must be 10 characters or less")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(10, "Password must be 10 characters or less")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),

          jobType: Yup.string()
            .notOneOf(["it-jr"], "Invalid job type")
            .required("Required"),
        })}
      >
        { ({handleReset}) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <MyTextInput
              label="Password"
              name="password"
              type="text"
              placeholder="Enter password"
            />
            <MyTextInput
              label="Confirm Password"
              name="confirmPassword"
              type="text"
              placeholder="Confirm password"
            />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Jr</option>
            </MySelect>
            <MyCheckBox label="Terms & Conditions" name="terms" />
            <button type="submit">Submit</button>
            <button onClick={handleReset} type="submit">Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
