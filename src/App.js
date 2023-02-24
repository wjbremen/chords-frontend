//import Main from './Demos/Main';
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestRouter from './routes/TestRouter';
import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import Piano from './routes/Piano';
import User from './routes/User';
import ExportFiles from './routes/ExportFiles';
import Guitar from './routes/Guitar';
import { get_chord_data} from "./routes/loaderFunctions"; 


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
      loader: get_chord_data, 
    },
    {
      path: "guitar",
      element: <Guitar />,
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
