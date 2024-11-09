import { Formik, Form } from "formik";

export const MyForm = ({ children, initialValues, validation, submit, classes }) => {
  // ---------- render jsx ----------
  return (
    <Formik
      enableReinitialize
      validateOnMount={true}
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={submit}
    >
      <Form className={`w-full ${classes}`}>{children}</Form>
    </Formik>
  );
};
