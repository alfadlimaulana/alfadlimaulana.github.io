import { useEffect } from "react";
import { Link } from "react-router-dom";
import Tabel from "../../components/admin/Tabel";
import { projects } from "../../components/data/experiences.json";
import { DataTable } from "../../components/DataTable";
import { Portfolio, columns } from "../../components/portfolio/columns";
import { buttonVariants } from "../../components/ui/button";

function Dashboard() {
  useEffect(() => {
    console.log(projects);
  }, []);

  const data: Portfolio[] = projects;

  return (
    <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <Link to="/admin/add" className={buttonVariants({ variant: "default" })}>
          Tambah Project
        </Link>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Dashboard;
