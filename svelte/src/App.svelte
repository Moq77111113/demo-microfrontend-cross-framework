<script lang="ts">
  import { RouterView } from '@dvcol/svelte-simple-router/components';
  import { link } from '@dvcol/svelte-simple-router/router';
  import type {
    Route,
    RouterOptions,
  } from '@dvcol/svelte-simple-router/models';

  import Page2 from './lib/Page2.svelte';
  import Counter from './lib/Counter.svelte';
  import { onMount } from 'svelte';

  const RouteName = {
    Page2: 'Page2',
    Counter: 'Counter',
  } as const;

  onMount(() => {
    console.log(import.meta.env.VITE_BASE_PATH);
  });

  type RouteNames = (typeof RouteName)[keyof typeof RouteName];
  const withBase = (path: string) => {
    console.log(import.meta.env.VITE_BASE_PATH);
    const r =
      import.meta.env.VITE_BASE_PATH === '/'
        ? path
        : `${import.meta.env.VITE_BASE_PATH}${path}`;
    console.log(r);
    return r;
  };

  export const routes: Readonly<Route<RouteNames>>[] = [
    {
      name: RouteName.Page2,
      path: withBase('/page2'),
      component: Page2,
    },
    {
      name: RouteName.Counter,
      path: withBase('/counter'),
      component: Counter,
    },
  ];

  export const options: RouterOptions<RouteNames> = {
    routes,
  } as const;
</script>

<main>
  <RouterView {options}>
    <div>SVELTE</div>
    <nav>
      <ul>
        {#each routes as route}
          <li>
            <a href={route.path} use:link>{route.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </RouterView>
</main>
