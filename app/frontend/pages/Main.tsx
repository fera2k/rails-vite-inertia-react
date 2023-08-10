import { ReactNode } from 'react';
import SimpleLayout from '../layouts/SimpleLayout';

const Main = (): JSX.Element => {
  return <div>This page is supposed to be turned into a dashboard or landing page after login</div>;
};

Main.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default Main;
