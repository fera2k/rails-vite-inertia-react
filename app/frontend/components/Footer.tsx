import { Box, Center, Container, /* Flex, */ Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import SocialButton from './SocialButton';

const SmallFooterWithSocial = () => (
  <Box bg={useColorModeValue('gray.200', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
    <Container
      as={Stack}
      maxW="6xl"
      py={1}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center' }}
    >
      <Center>
        <Text>© 2023 Fera Soluções</Text>
      </Center>
      <Container
        as={Stack}
        align={{ base: 'center', md: 'right' }}
        position="relative"
        right={{ base: 'unset', md: '0' }}
        spacing={2}
        padding={0}
        direction="row"
        width={{ base: 'unset', md: 'auto' }}
        marginTop={{ base: '0 !important' }}
      >
        <SocialButton label="Twitter" href="#">
          <FaTwitter />
        </SocialButton>
        <SocialButton label="YouTube" href="#">
          <FaYoutube />
        </SocialButton>
        <SocialButton label="Instagram" href="#">
          <FaInstagram />
        </SocialButton>
      </Container>
    </Container>
  </Box>
);

export default SmallFooterWithSocial;
