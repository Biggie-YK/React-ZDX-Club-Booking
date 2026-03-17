import { createHashRouter, ScrollRestoration } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Knowledge from "./pages/Knowledge";
import KnowledgeArticle from "./components/KnowledgeArticle";
import Reserve from "./pages/Reserve";
import Draw from "./pages/Draw";
import OtherPicks from "./pages/OtherPicks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Layout from "./layout/Layout";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/knowledge",
        element: <Knowledge />,
      },
      {
        path: "/knowledge-article",
        element: <KnowledgeArticle />,
      },
      {
        path: "/reserve",
        element: <Reserve />,
      },
      {
        path: "/draw",
        element: <Draw />,
      },
      {
        path: "/other-picks",
        element: <OtherPicks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
]);
