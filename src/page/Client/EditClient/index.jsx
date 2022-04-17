import React, { useEffect, useState } from "react";
import FormClient from "../../../components/Form";
import { useParams } from "react-router-dom";
import { getSpecificClient } from "../../../helpers/clients";
import MoonLoader from "react-spinners/ClipLoader";

const index = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSpecificClient(id, setClient, setLoading);
  }, []);

  return (
    <div>
      {client.id ? (
        <div>
          <h1 className="font-black text-4xl text-blue-900 mb-3">
            Edit Client
          </h1>
          <p className="mb-7 text-2xl">
            Fill in the following fields to edit a client
          </p>
          {loading ? (
            <div className="flex items-center justify-center">
              <MoonLoader size={150} color={"#4f46e5"} loading={loading} />
            </div>
          ) : (
            <FormClient client={client} />
          )}
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              <MoonLoader size={150} color={"#4f46e5"} loading={loading} />
            </div>
          ) : (
            <div>
              <h1 className="font-black text-4xl text-center text-blue-900 mb-3">
                404 - Client not found
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default index;
