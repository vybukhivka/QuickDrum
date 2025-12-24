import { RouteObject } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import Explore from '../pages/Explore';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import ErrorBoundary from '../pages/ErrorBoundary';
import PageNotFound from '../pages/PageNotFound';
import SynthContainer from '../components/synth/SynthContainer';

const mainRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <SynthContainer />, errorElement: <ErrorBoundary /> },
      { path: '/about', element: <About />, errorElement: <ErrorBoundary /> },
      {
        path: '/explore',
        element: <Explore />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  { path: '*', element: <PageNotFound /> },
];

export default mainRoutes;
