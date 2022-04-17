import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "../Alert";
import { addClient, editClient } from "../../helpers/clients";
import { useNavigate } from "react-router-dom";

const index = ({ client }) => {
  /* Validations */
  const navigate = useNavigate();
  const newClientValues = Yup.object().shape({
    name: Yup.string()
      .min(3, "The name is too short")
      .max(40, "The name is too long")
      .required(),
    business: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.number()
      .positive()
      .integer()
      .min(11, "The number must be 11 digits")
      .typeError("The phone number is not valid"),
  });

  const handleSubmit = (values) => {
    if (client.id) {
      editClient(client.id, values);
    } else {
      addClient(values);
    }
    navigate("/client");
  };

  return (
    <div className="bg-white px-5 py-10 rounded-md shadow-md lg:w-3/5 m-auto">
      <h1 className="text-gray-600 font-bold text-2xl uppercase text-center mb-5">
        {`${client.id ? "Editing your client" : "Adding a new client"}`}
      </h1>

      <Formik
        initialValues={{
          name: client?.name ?? "",
          business: client?.business ?? "",
          email: client?.email ?? "",
          phone: client?.phone ?? "",
          notes: client?.notes ?? "",
        }}
        enableReinitialize={true}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientValues}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <div className="mb-4">
              <label className="text-gray-800 mb-2" htmlFor="name">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                className="block w-full p-3 bg-gray-50 outline-none"
                placeholder="Enter the name of the client"
              />
              {errors.name && touched.name ? (
                <Alert>{errors.name}</Alert>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="text-gray-800 mb-2" htmlFor="business">
                Business:
              </label>
              <Field
                type="text"
                name="business"
                className="block w-full p-3 bg-gray-50 outline-none"
                placeholder="Enter the business of the client"
              />
              {errors.business && touched.business ? (
                <Alert>{errors.business}</Alert>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="text-gray-800 mb-2" htmlFor="email">
                E-mail:
              </label>
              <Field
                type="email"
                name="email"
                className="block w-full p-3 bg-gray-50 outline-none"
                placeholder="Enter the email of the client"
              />
              {errors.email && touched.email ? (
                <Alert>{errors.email}</Alert>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="text-gray-800 mb-2" htmlFor="phone">
                Phone:
              </label>
              <Field
                type="tel"
                name="phone"
                className="block w-full p-3 bg-gray-50 outline-none"
                placeholder="Enter the phone of the client"
              />
              {errors.phone && touched.phone ? (
                <Alert>{errors.phone}</Alert>
              ) : null}
            </div>
            <div className="mb-5">
              <label className="text-gray-800 mb-2" htmlFor="notes">
                Notes:
              </label>
              <Field
                as="textarea"
                type="text"
                name="notes"
                className="block w-full p-3 bg-gray-50 outline-none h-40"
                placeholder="Enter the notes of the client"
              />
              {errors.notes && touched.notes ? (
                <Alert>{errors.notes}</Alert>
              ) : null}
            </div>

            <input
              type="submit"
              value={`${client.id ? "Edit client" : "Add client"}`}
              className="w-full bg-blue-800 p-3 uppercase text-white text-lg cursor-pointer"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

index.defaultProps = {
  client: {},
};

export default index;
