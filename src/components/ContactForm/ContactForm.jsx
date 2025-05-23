import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form>
        <div className={css.fieldWrapper}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.field}
          ></Field>
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.fieldWrapper}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.field}
          ></Field>
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
