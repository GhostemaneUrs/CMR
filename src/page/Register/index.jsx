import React, { useState } from "react";
import Alert from "../../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import register from "../../assets/images/register.svg";
import { Formik, Form, Field } from "formik";

const index = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const registerValues = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const handleSubmit = (values) => {
    setUsers(values);
    navigate("/");
  };
  return (
    <div className="container h-screen m-auto flex justify-center items-center gap-10 p-4 md:p-0">
      <div className="lg:w-2/5 hidden lg:block">
        <img src={register} alt="register-img" />
      </div>
      <div className="h-full md:xl:lg:w-6/12 flex justify-center items-center">
        <div className="m-auto py-10 px-10 sm:p-20 xl:w-10/12 bg-white shadow">
          <div className="space-y-4 text-center">
            <p className="font-medium text-lg text-gray-600">Sign Up!</p>
          </div>

          <div role="hidden" className="mt-12 border-t" />

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={registerValues}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form autoComplete="off" className="space-y-6 py-6">
                <div className="mb-5">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none outline-none"
                  />
                  {errors.name && touched.email ? (
                    <Alert>{errors.name}</Alert>
                  ) : null}
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none outline-none"
                  />
                  {errors.email && touched.email ? (
                    <Alert>{errors.email}</Alert>
                  ) : null}
                </div>

                <div className="space-y-6">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none outline-none"
                  />
                  {errors.password && touched.password ? (
                    <Alert>{errors.password}</Alert>
                  ) : null}
                </div>

                <div>
                  <button className="w-full px-6 py-3 rounded-xl bg-indigo-600 transition hover:bg-indigo-700 mb-5">
                    <span className="font-semibold text-white text-lg uppercase">
                      Register
                    </span>
                  </button>
                  <Link to="/" className="w-max p-3 -ml-3">
                    <span className="text-md tracking-wide text-blue-600 hover:text-blue-700">
                      Do you already have an account with us?
                    </span>
                  </Link>
                </div>
                <div role="hidden" className="mt-12 border-t" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;
