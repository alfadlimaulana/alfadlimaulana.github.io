import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProjectsContextProvider from './context/ProjectContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProjectsContextProvider>
      <App />
    </ProjectsContextProvider>
  </React.StrictMode>,
)