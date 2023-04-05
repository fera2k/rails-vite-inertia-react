import { router } from '@inertiajs/react';
import { Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

type ResetPasswordConfirmationProps = {
  loginPath: string;
};

const ResetPasswordConfirmation = ({ loginPath }: ResetPasswordConfirmationProps): JSX.Element => (
  <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
      <Stack align="center">
        <Heading fontSize="4xl">Password Reset Request</Heading>
      </Stack>
      <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
        <Stack spacing={4}>
          <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
            We have received your password reset request and if your email is correct, you will get an email with
            instructions to proceed.
          </Text>
          <Button color="blue.400" variant="link" onClick={() => router.visit(loginPath)}>
            Return to Log In
          </Button>
        </Stack>
      </Box>
    </Stack>
  </Flex>
);

export default ResetPasswordConfirmation;
