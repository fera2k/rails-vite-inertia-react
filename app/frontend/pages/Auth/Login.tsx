import { useEffect, SyntheticEvent, FormEvent } from 'react';
import { useForm, router } from '@inertiajs/react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

import useTypedPage from '@/hooks/useTypedPage';
import useToastAlert from '@/hooks/useToastAlert';

type LoginCardProps = {
  loginPath: string;
  resetPasswordPath: string;
};

const LoginCard = ({ loginPath, resetPasswordPath }: LoginCardProps) => {
  const { flash } = useTypedPage().props;
  const { data, setData } = useForm({
    login: '',
    password: '',
    remember: false,
  });
  useToastAlert(flash);

  const onClickResetPassword = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.visit(resetPasswordPath);
  };

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { id: key, value } = e.currentTarget;
    setData((values) => ({ ...values, [key]: value }));
  };

  const handleChangeCheckbox = (e: SyntheticEvent<HTMLInputElement>) => {
    const { id: key, checked: value } = e.currentTarget;
    setData((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.post(loginPath, {
      user: { ...data },
    });
  };

  useEffect(() => {
    router.on('error', (err) => {
      console.log('errors:', err);
    });
    router.on('invalid', (event) => {
      console.log('event(login): ', event);
      event.preventDefault();
    });
  }, []);

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Log In</Heading>
        </Stack>
        <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
          <form onSubmit={handleSubmit} id="login_form">
            <Stack spacing={4}>
              <FormControl id="login">
                <FormLabel>Username or Email</FormLabel>
                <Input type="login" value={data.login} onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={data.password} onChange={handleChange} autoComplete="current-password" />
              </FormControl>
              <FormControl id="remember">
                <Checkbox onChange={handleChangeCheckbox}>Remember this device</Checkbox>
              </FormControl>
              <Button colorScheme="blue" variant="solid" type="submit">
                Sign In
              </Button>
              <Center>
                <Button colorScheme="teal" onClick={onClickResetPassword} variant="link">
                  Forgot password?
                </Button>
              </Center>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginCard;
