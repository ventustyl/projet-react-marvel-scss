//Import de react router dom pour les routes
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Film from "./pages/Film";
import Serie from "./pages/Serie";
import Personnage from "./pages/Personnage";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import"./style.scss";
import Contact from "./pages/Contact";

//Creation de la structure des pages dans un layout avec outlet de react router dom
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Creation de la constante de la création de la route principale
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/film",
        element: <Film />,
      }, 
      {
        path: "/serie",
        element: <Serie />,
      },
      {
        path: "/personnage",
        element: <Personnage/>,
      },

      {
        path: "/film/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
