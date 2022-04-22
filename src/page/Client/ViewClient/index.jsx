import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSpecificClient } from "../../../helpers/clients";
import MoonLoader from "react-spinners/ClipLoader";
import personalInfo from "../../../assets/images/personal.png";

const index = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSpecificClient(id, setClient, setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <MoonLoader size={150} color={"#4f46e5"} loading={loading} />
        </div>
      ) : (
        <div className="w-full lg:w-3/4 shadow-sm py-6 m-auto bg-white rounded">
          <h1 className="text-2xl text-center uppercase font-bold mt-5">
            Details client
          </h1>
          <div className="flex flex-col xl:flex-row items-center gap-7">
            <img src={personalInfo} alt="personal-info" />
            <div className="p-4">
              <p className="md:text-xl mb-2 uppercase">
                <span className="font-bold">Name: </span>
                {client.name}
              </p>
              <p className="md:text-xl mb-2 uppercase">
                <span className="font-bold">Business: </span>
                {client.business}
              </p>
              {client.phone && (
                <p className="md:text-xl mb-2 uppercase">
                  <span className="font-bold">Phone: </span>
                  {client.phone}
                </p>
              )}
              <p className="md:text-xl mb-2 uppercase ">
                <span className="font-bold">Email: </span>
                {client.email}
              </p>
              {client.notes && (
                <p className="md:text-xl mb-2 uppercase">
                  <span className="font-bold">Notes: </span>
                  {client.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
