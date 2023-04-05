import { SyntheticEvent, FormEvent } from 'react';
import { useForm, router } from '@inertiajs/react';
import { Box, Button, FormControl, FormLabel, Flex, Heading, Input, Stack, useColorModeValue } from '@chakra-ui/react';

type EditPasswordWithTokenProps = {
  passwordPath: string;
  resetPasswordToken: string;
};

const EditPasswordWithToken = ({ passwordPath, resetPasswordToken }: EditPasswordWithTokenProps): JSX.Element => {
  const { data, setData } = useForm({
    password: '',
    password_confirmation: '',
    reset_password_token: resetPasswordToken,
  });

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { id: key, value } = e.currentTarget;
    setData((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.put(passwordPath, {
      user: { ...data },
    });
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Reset Password</Heading>
        </Stack>
        <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="password" isRequired>
                <FormLabel>New Password</FormLabel>
                <Input type="password" value={data.password} onChange={handleChange} />
              </FormControl>
              <FormControl id="password_confirmation" isRequired>
                <FormLabel>Confirm your password</FormLabel>
                <Input type="password" value={data.password_confirmation} onChange={handleChange} />
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

export default EditPasswordWithToken;
