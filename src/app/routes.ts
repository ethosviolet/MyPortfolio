import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Introduction } from './components/Introduction';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Introduction },
      { path: 'projects', Component: Projects },
      { path: 'projects/:projectId', Component: ProjectDetail }
    ]
  }
]);
