import { ReactNode } from 'react';
import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import { router } from '@inertiajs/react';

import SimpleLayoutWithFooter from '../layouts/SimpleLayoutWithFooter';

type IndexProps = {
  targetLoginUrl?: string;
};

const Index = ({ targetLoginUrl = '/users/sign_in' }: IndexProps) => {
  const gotoLogin = () => {
    router.visit(targetLoginUrl);
  };

  return (
    <Container maxW="3xl">
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight="110%">
          <Text>My App</Text>
          <Text as="span" color="green.400">
            App Boilerplate Code
          </Text>
        </Heading>
        <Text color="gray.500">
          To access the App, you need to have to be registered. If you have a credential, please click on the Login
          buytton below
        </Text>
        <Stack direction="column" spacing={3} align="center" alignSelf="center" position="relative">
          <Button
            colorScheme="green"
            bg="green.400"
            rounded="full"
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            onClick={gotoLogin}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

Index.layout = (page: ReactNode) => <SimpleLayoutWithFooter>{page}</SimpleLayoutWithFooter>;

export default Index;
