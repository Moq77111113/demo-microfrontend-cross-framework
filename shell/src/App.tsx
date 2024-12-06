import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import './App.css';

import Nav from '@scope/nav';
import { WrapWebComponent } from './WebComponentWrapper';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div
        className="p-2 flex gap-2"
        style={{ display: 'flex', padding: '2rem', gap: '2rem' }}
      >
        <Link to="/" className="[&.active]:font-bold">
          SHELL
        </Link>
        <Link to="/nav/$" className="[&.active]:font-bold">
          Nav
        </Link>
        <Link to="/sv/$" className="[&.active]:font-bold">
          Svelte
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// TODO :
// Manifest cdnn (source url, modules)
['http://localhost:3002/remoteEntry-[hash].js'].forEach(async (source) => {
  await import(/* @vite-ignore */ source).then((m) => {
    m.init();

    m.get('.');
  });
});

const index = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Home</div>,
});

const nav = createRoute({
  getParentRoute: () => rootRoute,
  path: '/nav/$',
  component: () => <Nav basePath="/nav" />,
});

const sv = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sv/$',
  component: () => <WrapWebComponent tag="app2-element" />,
});

const routeTree = rootRoute.addChildren([index, nav, sv]);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
