import React, { useState, useEffect } from "react";
import { deleteClient, getClients } from "../../helpers/clients";
import MoonLoader from "react-spinners/ClipLoader";
import { RiFileEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients(setClients, setLoading);
  }, []);

  const onViewClient = (id) => {
    navigate(`/client/${id}`);
  };

  const onEditClient = (id) => {
    navigate(`/client/edit/${id}`);
  };

  const onDeleteClient = (id) => {
    deleteClient(id);
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900 mb-3">Clients</h1>
      <p className="mb-7 text-2xl">Manage your clients</p>
      {loading ? (
        <div className="flex items-center justify-center">
          <MoonLoader size={150} color={"#4f46e5"} loading={loading} />
        </div>
      ) : (
        <table className="w-full table-auto shadow bg-white">
          <thead className="bg-blue-900 text-white uppercase">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Business</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                className="text-center border-b hover:bg-gray-50 cursor-pointer"
                key={client.id}
              >
                <td className="p-3">{client.name}</td>
                <td className="p-3">{client.business}</td>
                <td className="p-3">{client.email}</td>
                <td className="p-3">{client.phone}</td>
                <td className="p-3">
                  <div className="flex justify-center items-center">
                    <HiEye
                      className="text-yellow-500 hover:text-yellow-600 cursor-pointer text-xl"
                      onClick={() => onViewClient(client.id)}
                    />
                    <RiFileEditFill
                      className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl"
                      onClick={() => onEditClient(client.id)}
                    />
                    <AiFillDelete
                      className="text-red-500 hover:text-red-700 cursor-pointer text-xl"
                      onClick={() => onDeleteClient(client.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default index;
