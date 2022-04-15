import React from "react";
import FormClient from "../../../components/Form";

const index = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 mb-3">New Client</h1>
      <p className="mb-10">Fill in the following fields to create a client</p>
      <FormClient />
    </>
  );
};

export default index;
