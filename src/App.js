import { Routes, Route } from "react-router-dom";

import "./App.css";

import NotFound from "./components/404";
import Home from "./components/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            {" "}
            <Home />
          </Layout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
