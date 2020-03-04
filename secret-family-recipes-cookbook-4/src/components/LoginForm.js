// import { withFormik } from "formik";
// import * as yup from "yup";
// import Login from "./Login";

// const LoginWrapper = Login;

// const LoginValidation = yup.object().shape({
//   email: yup
//     .string()
//     .email("Sorry, that's not a valid email.")
//     .required("Please Enter Your Email."),
//   password: yup
//     .string()
//     .min(8)
//     .max(16)
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       "Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character."
//     )
//     .required("Please Enter Your Password.")
// });

// export default withFormik({
//   // Handles our submission
//   handleSubmit: (values, { setSubmitting }) => {
//     // This is where you could send the submitted values to the backend
//     console.log("Submitted Email:", values.email);
//     console.log("Submitted Password:", values.password);
//     // Simulates the delay of a real request
//     setTimeout(() => setSubmitting(false), 3 * 1000);
//   },
//   validationSchema: LoginValidation
// })(LoginWrapper);
