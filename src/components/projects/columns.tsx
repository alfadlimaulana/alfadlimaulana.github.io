import { ColumnDef } from "@tanstack/react-table";
import { differenceInMonths } from "date-fns";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import axios from 'axios'
import { Project } from "../../context/ProjectContext";
import { useProjectsContext } from "../../hooks/useProjectContext";
import { useAuthContext } from "../../hooks/useAuthContext";

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "position",
    header: "Posisi",
  },
  {
    header: "Durasi",
    cell: ({ row }) => {
      const monthDifference = differenceInMonths(new Date(row.original.endDate), new Date(row.original.startDate));
      return <div>{monthDifference} Bulan</div>;
    },
  },
  {
    accessorKey: "link.live",
    header: "Link",
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const { dispatch } = useProjectsContext()
      const {state} = useAuthContext()

      const deleteProject = async () => {
        if(state.user) {
          const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/projects/${row.original._id}`, {
            headers: {
              "Authorization": `Bearer ${state.user.token}`
            }
          })
          dispatch({type: "REMOVE_PROJECT", payload: res.data.data})
        }
      }

      return <>
        <div className="flex gap-2"> 
          <Link to={`/admin/edit/${row.original._id}`}>Edit</Link>
          <AlertDialog>
            <AlertDialogTrigger><span className="text-red-300">Delete</span></AlertDialogTrigger>
            <AlertDialogContent className="bg-brand-blue">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription className="text-gray-300">
                  This action cannot be undone. This will permanently remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="hover:bg-brand-grey hover:text-white">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={deleteProject}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </>
    },
  },
];
