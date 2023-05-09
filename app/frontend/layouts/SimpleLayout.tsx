import { ReactNode } from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';

import NavHeader from '@/pages/Nav/NavHeader';
import SmallFooterWithSocial from '../components/Footer';

const SimpleLayout = ({ children }: { children: ReactNode }) => (
  <Flex direction="column" height="100vh" className="bg-gray-100" minWidth={360}>
    <NavHeader />
    <Box padding={[2, 6]}>{children}</Box>
    <Spacer />
    <Box>
      <SmallFooterWithSocial />
    </Box>
  </Flex>
);

export default SimpleLayout;
