import { ReactNode } from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';

import NavHeader from '@/pages/Nav/NavHeader';
import SmallFooterWithSocial from '../components/Footer';

const SimpleLayout = ({ children }: { children: ReactNode }) => (
  <Flex direction="column" height="100vh">
    <NavHeader />
    <Box>{children}</Box>
    <Spacer />
    <Box>
      <SmallFooterWithSocial />
    </Box>
  </Flex>
);

export default SimpleLayout;
