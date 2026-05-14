import { createElement } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
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
      {
        path: 'projects/elearning-platform',
        element: createElement(Navigate, { to: '../custom-caliente', replace: true })
      },
      { path: 'projects/:projectId', Component: ProjectDetail }
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});
