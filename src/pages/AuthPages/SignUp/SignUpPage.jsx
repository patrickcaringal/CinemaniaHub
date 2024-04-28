import { Fragment, memo } from "react";
import { useFormik } from "formik";

import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignupSchema } from "../validation";
import { useSignUp, useAuthContext } from "../../../hooks";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsNconditions: false,
};

const SignUpPage = memo(() => {
  // const { dispatch } = useAuthContext();
  const { error: signUpError, loading, signUp } = useSignUp();

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const res = await signUp({
        email: values.email,
        password: values.password,
      });

      if (res.error) return;

      alert("Successfully signed up");
      // dispatch({
      //   type: "LOGIN",
      //   payload: res.user,
      // });
    },
  });
  const { values, setFieldValue, handleSubmit, errors, touched } = formik;

  const hasError = (field) => errors?.[field] && touched?.[field];
  const getErrorClass = (field) => (hasError(field) ? "is-invalid" : "");
  const getErrorMessage = (field) =>
    hasError(field) && (
      <div className="invalid-feedback d-block">{errors?.[field]}</div>
    );

  return (
    <Fragment>
      <main className="main-content">
        <div
          style={{
            backgroundImage: "url(/assets/images/pages/01.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "950px",
          }}
        >
          <Container>
            <Row className="justify-content-center align-items-center height-self-center pt-5">
              <Col lg="8" md="12" className="align-self-center pt-5">
                <div className="user-login-card bg-body">
                  <h4 className="text-center mb-5">Create Your Account</h4>
                  <Row lg="2" className="row-cols-1 g-2 g-lg-5">
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={`rounded-0 ${getErrorClass("firstName")}`}
                        value={values.firstName}
                        onChange={(e) => {
                          setFieldValue("firstName", e.target.value);
                        }}
                      />
                      {getErrorMessage("firstName")}
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={`rounded-0 ${getErrorClass("lastName")}`}
                        value={values.lastName}
                        onChange={(e) => {
                          setFieldValue("lastName", e.target.value);
                        }}
                      />
                      {getErrorMessage("lastName")}
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        Email
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={`rounded-0 ${getErrorClass("email")}`}
                        value={values.email}
                        onChange={(e) => {
                          setFieldValue("email", e.target.value);
                        }}
                      />
                      {getErrorMessage("email")}
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className={`rounded-0 ${getErrorClass("password")}`}
                        value={values.password}
                        onChange={(e) => {
                          setFieldValue("password", e.target.value);
                        }}
                      />
                      {getErrorMessage("password")}
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className={`rounded-0 ${getErrorClass(
                          "confirmPassword"
                        )}`}
                        value={values.confirmPassword}
                        onChange={(e) => {
                          setFieldValue("confirmPassword", e.target.value);
                        }}
                      />
                      {getErrorMessage("confirmPassword")}
                    </Col>
                  </Row>

                  {signUpError && (
                    <div className="invalid-feedback d-block">
                      {signUpError}
                    </div>
                  )}

                  <Form.Label className="list-group-item d-flex align-items-center mt-5 mb-3 text-white">
                    <Form.Check.Input
                      className="m-0 me-2"
                      type="checkbox"
                      value={values.termsNconditions}
                      onChange={(e) => {
                        setFieldValue("termsNconditions", e.target.checked);
                      }}
                    />
                    {`I've read and accept the`}
                    <Link to="/terms-of-use" className="ms-1">
                      terms & conditions
                    </Link>
                  </Form.Label>
                  {getErrorMessage("termsNconditions")}

                  <Row className="text-center mt-3">
                    <Col lg="3"></Col>
                    <Col lg="6">
                      <div className="full-button">
                        <div className="iq-button">
                          <button
                            type="button"
                            className="btn text-uppercase position-relative"
                            onClick={handleSubmit}
                            disabled={loading}
                          >
                            <span className="button-text">Sign Up</span>
                            <i className="fa-solid fa-play"></i>
                          </button>
                        </div>
                        <p className="mt-2 mb-0 fw-normal">
                          Already have an account?
                          <a href="/login" className="ms-1">
                            Login
                          </a>
                        </p>
                      </div>
                    </Col>
                    <Col lg="3"></Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

SignUpPage.displayName = "SignUpPage";
export default SignUpPage;
