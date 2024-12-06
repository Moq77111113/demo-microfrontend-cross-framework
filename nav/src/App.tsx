import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';

type Props = {
  basePath?: string;
};
function App(props: Props) {
  const { basePath = '/nav' } = props;
  return <RouterProvider router={router(basePath)} />;
}

export default App;
