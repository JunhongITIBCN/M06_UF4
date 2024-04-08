import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./nav/header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>,
      <Route index element={<Home />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

function App({routes}) {
  return (
    <RouterProvider router={router} />
  );
}

export default App;