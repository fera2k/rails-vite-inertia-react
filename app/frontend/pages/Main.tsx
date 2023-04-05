import { ReactNode } from 'react';
import SimpleLayoutWithFooter from '../layouts/SimpleLayoutWithFooter';
import NavMenu from './NavMenu';

const Main = (): JSX.Element => {
  return <NavMenu />;
};

Main.layout = (page: ReactNode) => <SimpleLayoutWithFooter>{page}</SimpleLayoutWithFooter>;

export default Main;
