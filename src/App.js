import Main from './Demos/Main';
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestRouter from './testRouter/TestRouter';
import Home from './testRouter/Home';
import ErrorPage from './testRouter/ErrorPage';
import Piano from './testRouter/Piano';
import User from './testRouter/User';
import ExportFiles from './testRouter/ExportFiles';
import Guitar from './testRouter/Guitar';
import {guitar_key_get, piano_key_get} from "./testRouter/loaderFunctions"; 


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "piano",
      element: <Piano />,
    },
    {
      path: "guitar",
      element: <Guitar />,
      loader : guitar_key_get,
    }, 
    {
      path: "user/:username",
      element: <User />
    },
    {
      path: "exportFiles",
      element: <ExportFiles />
    }
  ]);
 
  return (
    <>
      {/*<Main/> */}
      {/*<TestRouter /> */}
      <RouterProvider router = {router} /> 
    </>
  );
}

export default App;
