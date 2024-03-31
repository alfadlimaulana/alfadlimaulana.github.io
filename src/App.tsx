import ReactDOM from "react-dom/client";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import AddProject from "./pages/admin/AddProject";
import { useAuthContext } from "./hooks/useAuthContext";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const {state, dispatch} = useAuthContext()

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={state.user ? <Dashboard /> : <Navigate to={"/login"}/>} />
          <Route path="add" element={state.user? <AddProject /> : <Navigate to={"/login"}/>} />
          <Route path="edit/:id" element={state.user? <AddProject /> : <Navigate to={"/login"}/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
