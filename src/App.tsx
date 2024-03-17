import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import AddProject from "./pages/admin/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddProject />} />
          <Route path="edit/:id" element={<AddProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
