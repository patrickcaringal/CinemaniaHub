import { Fragment, memo } from "react";
import { useFormik } from "formik";

import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { LoginSchema } from "../validation";
import { useLogin, useAuthContext } from "../../../hooks";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = memo(() => {
  // const { dispatch } = useAuthContext();
  const { error: loginError, login } = useLogin();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const res = await login({
        email: values.email,
        password: values.password,
      });

      if (res.error) return;

      alert("Successfully Logged in");
      // console.log(res.user);
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
            minHeight: "500px",
          }}
        >
          <Container>
            <Row className="justify-content-center align-items-center height-self-center py-5">
              <Col lg="5" md="12" className="align-self-center pt-5">
                <div className="user-login-card bg-body">
                  <div className="text-center">
                    <h4 className="text-center mb-5">Login</h4>
                  </div>
                  <Form action="post">
                    <Form.Group className="mb-3">
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
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                    </Form.Group>

                    {loginError && (
                      <div className="invalid-feedback d-block">
                        {loginError}
                      </div>
                    )}

                    <Form.Group className="text-end mb-3">
                      <Link
                        to="/lost-password"
                        className="text-primary fw-semibold fst-italic"
                      >
                        Forgot Password?
                      </Link>
                    </Form.Group>
                    <Form.Label className="list-group-item d-flex align-items-center mb-3 font-size-14 text-white fw-500">
                      <Form.Check.Input type="checkbox" className="m-0 me-2" />
                      Remember Me
                    </Form.Label>
                    <div className="full-button">
                      <div className="iq-button">
                        <button
                          type="button"
                          className="btn text-uppercase position-relative"
                          onClick={handleSubmit}
                        >
                          <span className="button-text">log in</span>
                          <i className="fa-solid fa-play"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                  <p className="my-4 text-center fw-500 text-white">
                    New to Streamit?{" "}
                    <Link to="/register" className="text-primary ms-1">
                      Register
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

LoginPage.displayName = "LoginPage";
export default LoginPage;
