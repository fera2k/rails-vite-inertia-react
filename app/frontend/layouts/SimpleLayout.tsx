import { ReactNode } from 'react';
import { Flex, Box, Spacer, useColorModeValue } from '@chakra-ui/react';

import NavHeader from '@/pages/Nav/NavHeader';
import SmallFooterWithSocial from '../components/Footer';

const SimpleLayout = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue('gray.50', 'gray.600');
  return (
    <Flex direction="column" height="100vh" minWidth="360px" bg={bg}>
      <NavHeader />
      <Box padding={[2, 6]}>{children}</Box>
      <Spacer />
      <Box>
        <SmallFooterWithSocial />
      </Box>
    </Flex>
  );
};

export default SimpleLayout;
