import { SyntheticEvent, FormEvent } from 'react';
import { useForm, router } from '@inertiajs/react';
import { Box, Button, FormControl, Flex, Heading, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react';

type ResetPasswordProps = {
  email: string;
  passwordPath: string;
};

const ResetPassword = ({ email, passwordPath }: ResetPasswordProps): JSX.Element => {
  const { data, setData } = useForm({
    email,
  });

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { id: key, value } = e.currentTarget;
    setData((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.post(passwordPath, {
      user: { ...data },
    });
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Forgot your password?</Heading>
        </Stack>
        <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
                Type your email address
              </Text>
              <FormControl id="email">
                <Input type="email" value={data.email} onChange={handleChange} />
              </FormControl>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
