import axios from "axios";
import Swal from "sweetalert2";

export const addClient = async (values) => {
  await axios
    .post("http://localhost:4000/clients", values)
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
    .put(`http://localhost:4000/clients/${id}`, values)
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
    .delete(`http://localhost:4000/clients/${id}`)
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
    .get(`http://localhost:4000/clients/${id}`)
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
    .get(`http://localhost:4000/clients/`)
    .then((res) => {
      setLoading(false);
      setClients(res.data);
    })
    .catch((err) => {
      Swal.fire({
        timer: 1500,
        icon: "error",
        title: "Oops...",
        showConfirmButton: false,
        text: "There was an error getting the client",
      });
    });
};
