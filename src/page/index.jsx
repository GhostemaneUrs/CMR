import React from "react";
import Home from "./Home";
import Client from "./Client";
import NewClient from "./Client/NewClient";
import EditClient from "./Client/EditClient";
import ViewClient from "./Client/ViewClient";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/client" element={<Home />}>
        <Route index element={<Client />} />
        <Route path=":id" element={<ViewClient />} />
        <Route path="new" element={<NewClient />} />
        <Route path="edit/:id" element={<EditClient />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
