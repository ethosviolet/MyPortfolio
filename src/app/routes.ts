import { createElement } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { Root } from './components/Root';
import { Introduction } from './components/Introduction';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Introduction },
      { path: 'about', Component: AboutMe },
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
