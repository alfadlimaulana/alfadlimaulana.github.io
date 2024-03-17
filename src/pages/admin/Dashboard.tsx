import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tabel from "../../components/admin/Tabel";
import { projects } from "../../components/data/experiences.json";
import { DataTable } from "../../components/DataTable";
import { Portfolio, columns } from "../../components/portfolio/columns";
import { buttonVariants } from "../../components/ui/button";
import axios from "axios";

function Dashboard() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
        setProjects(res.data.data)
      } catch (error) {
        console.log(error)
      }
      
    }

    getProjects()
  }, []);

  return (
    <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <Link to="/admin/add" className={buttonVariants({ variant: "default" })}>
          Tambah Project
        </Link>
      </div>

      <DataTable columns={columns} data={projects} />
    </div>
  );
}

export default Dashboard;
