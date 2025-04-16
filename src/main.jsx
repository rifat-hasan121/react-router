import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDatailes from './Components/UserDatails/UserDatailes.jsx';


const usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<h2>loading......</h2>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component: UserDatailes,
      },
    ],
  },
  {
    path: "about",
    element: <div>Welcome to about section</div>,
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
