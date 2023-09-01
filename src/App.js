import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TransactionDetail from "./pages/TransactionDetail";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "transaction/:id",
    element: <TransactionDetail />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
