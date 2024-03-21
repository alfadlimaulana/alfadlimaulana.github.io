import { ProjectsContext } from "../context/ProjectContext";
import { useContext } from "react";

export const useProjectsContext = () => {
    const context = useContext(ProjectsContext)

    if (!context) {
        throw new Error("Component berada diluar scope context")
    }
    return context
}