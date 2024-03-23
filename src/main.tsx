import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProjectsContextProvider from './context/ProjectContext'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProjectsContextProvider>
        <App />
      </ProjectsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)