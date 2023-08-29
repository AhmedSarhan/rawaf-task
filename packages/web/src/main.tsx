import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import { ReactQueryProvider } from "@rawaf/shared";
const HomePage = lazy(() => import('./pages/home'));
const LoginPage = lazy(() => import('./pages/login'));
const RegisterPage = lazy(() => import('./pages/register'));

const ListingPage = lazy(() => import('./pages/listing'));



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/listing",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ListingPage />
      </Suspense>
    ),
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  </React.StrictMode>,
);
