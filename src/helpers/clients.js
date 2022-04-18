import axios from "axios";
import Swal from "sweetalert2";

export const addClient = async (values) => {
  await axios
    .post(import.meta.env.VITE_API_URL_PRODUCTION, values)
    .then((res) => {
      Swal.fire({
        timer: 1500,
        icon: "success",
        title: "success",
        showConfirmButton: false,
        text: "Client added successfully",
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error adding the client",
      });
    });
};

export const editClient = async (id, values) => {
  await axios
    .put(`${import.meta.env.VITE_API_URL_PRODUCTION}/${id}`, values)
    .then((res) => {
      Swal.fire({
        timer: 1500,
        icon: "success",
        title: "success",
        showConfirmButton: false,
        text: "Client edited successfully",
      });
    })
    .catch((err) => {
      Swal.fire({
        timer: 1500,
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        text: "There was an error editing the client",
      });
    });
};

export const deleteClient = async (id) => {
  await axios
    .delete(`${import.meta.env.VITE_API_URL_PRODUCTION}/${id}`)
    .then((res) => {
      Swal.fire({
        timer: 1500,
        icon: "success",
        title: "success",
        showConfirmButton: false,
        text: "Client deleted successfully",
      });
    })
    .catch((err) => {
      Swal.fire({
        timer: 1500,
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        text: "There was an error deleting the client",
      });
    });
};

export const getSpecificClient = async (id, setClient, setLoading) => {
  setLoading(true);
  await axios
    .get(`${import.meta.env.VITE_API_URL_PRODUCTION}/${id}`)
    .then((res) => {
      setLoading(false);
      setClient(res.data);
    })
    .catch((err) => {
      setLoading(false);
    });
};

export const getClients = async (setClients, setLoading) => {
  setLoading(true);
  await axios
    .get(import.meta.env.VITE_API_URL_PRODUCTION)
    .then((res) => {
      setLoading(false);
      setClients(res.data);
    })
    .catch((err) => {
      setLoading(false);
    });
};
