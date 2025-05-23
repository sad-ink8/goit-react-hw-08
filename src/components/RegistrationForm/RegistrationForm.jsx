import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
    console.log("Submitting register:", values);
  };

  const schema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
