import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tabel from "../../components/admin/Tabel";
import { projects } from "../../components/data/experiences.json";
import { DataTable } from "../../components/DataTable";
import { columns } from "../../components/portfolio/columns";
import { buttonVariants } from "../../components/ui/button";
import axios from "axios";
import { useProjectsContext } from "../../hooks/useProjectContext";

function Dashboard() {
  const {state, dispatch} = useProjectsContext()

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
        dispatch({type: "SET_PROJECTS", payload: res.data.data})
      } catch (error) {
        console.log(error)
      }
    }

    getProjects()
  }, []);

  return (
    <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
      <DataTable columns={columns} data={state.projects ?? []}/>
    </div>
  );
}

export default Dashboard;
