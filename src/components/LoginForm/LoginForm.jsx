import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
