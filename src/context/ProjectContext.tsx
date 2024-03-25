import { createContext, ReactNode, useReducer } from "react"

interface Props {
    children:ReactNode
}

export interface Project {
    _id: string,
    title: string,
    position: string
    startDate: string | Date,
    endDate?: string | Date,
    desc?: string
    jobDesc?: {
        desc?: string
    }[],
    images?: FileList | string[],
    link?: {
        github?: string,
        live?: string,
    },
    techStack?: {
        tech?: string
    }[],
}

interface ProjectsState {
    projects?: Project[] | null
}

type RemoveAction = {type: "REMOVE_PROJECT", payload: Project}
type SetAction = {type: "SET_PROJECTS", payload: Project[]}
type ProjectsAction = RemoveAction | SetAction

const initialState: ProjectsState = {
    projects: null,
};

export const ProjectsContext = createContext<{ state: ProjectsState, dispatch: React.Dispatch<ProjectsAction> }>({ state: initialState, dispatch: () => null })

export const projectsReducer = (state: ProjectsState, action: ProjectsAction): ProjectsState => {
    switch (action.type) {
        case "SET_PROJECTS":
            return {projects: action.payload}
        case "REMOVE_PROJECT":
            const updatedProjects = state.projects?.filter(
                project => project._id != action.payload._id
            );
            return {projects: updatedProjects}
        default:
            return state
    }
}

export const ProjectsContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(projectsReducer, initialState)

    return (
        <ProjectsContext.Provider value={{state, dispatch}}>
            { children }
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider