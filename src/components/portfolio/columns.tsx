import { ColumnDef } from "@tanstack/react-table";
import { differenceInMonths } from "date-fns";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export type Portfolio = {
  _id: string;
  title: string;
  position: string;
  startDate: string;
  endDate: string;
  link: { github: string; live: string };
};

export const columns: ColumnDef<Portfolio>[] = [
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
      return <div className="flex gap-2"> 
        <Link to={`/admin/edit/${row.original._id}`}>Edit</Link>
        <a className="text-red-300">Delete</a>
      </div>;
    },
  },
];
