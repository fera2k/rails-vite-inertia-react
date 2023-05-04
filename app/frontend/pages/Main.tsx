import { ReactNode } from 'react';
import SimpleLayout from '../layouts/SimpleLayout';

const Main = (): JSX.Element => {
  return <div>Hello World</div>;
};

Main.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default Main;
