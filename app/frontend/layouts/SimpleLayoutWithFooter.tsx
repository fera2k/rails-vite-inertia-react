import { ReactNode } from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import SmallFooterWithSocial from '../components/Footer';

const SimpleLayoutWithFooter = ({ children }: { children: ReactNode }) => (
  <Flex direction="column" height="100vh">
    <Box>{children}</Box>
    <Spacer />
    <Box>
      <SmallFooterWithSocial />
    </Box>
  </Flex>
);

export default SimpleLayoutWithFooter;
