import { useEffect, ReactNode, SyntheticEvent, FormEvent } from 'react';
import { router, useForm } from '@inertiajs/react';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  Stack,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import { FaUserPlus } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
import { HiOutlineSave } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';

import SimpleLayout from '@/layouts/SimpleLayout';
import FormWrapper from '@/components/FormWrapper';
import TextInput from '@/components/TextInput';
import useTypedPage from '@/hooks/useTypedPage';
import { DEFAULT_TOAST_DURATION } from '@/constants/constants';

type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
};

type UsersNewProps = {
  user: UserType;
  userPostPath: string;
};

const UsersList = ({ user, userPostPath }: UsersNewProps) => {
  const { flash, errors } = useTypedPage().props;
  const toast = useToast();
  const { colorMode } = useColorMode();
  const { data, setData } = useForm({
    username: '',
    email: '',
    password: '',
    isAdmin: false,
  });

  const goBack = () => {
    router.visit('/admin/users/');
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
    router.post(userPostPath, {
      user: { ...data },
    });
  };

  useEffect(() => {
    if (flash && flash.alert) {
      toast({
        description: flash.alert,
        status: 'error',
        duration: DEFAULT_TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [flash, toast]);

  console.log('new: errors', errors);

  return (
    <Container padding={0} maxW="container.sm" id="page_container">
      <Flex justifyContent="space-between">
        <HStack paddingLeft={4}>
          <Icon as={FaUserPlus} boxSize={5} />
          <Heading size="md" flexDirection="column">
            New User
          </Heading>
        </HStack>
        <Button variant="outline" size="sm" onClick={goBack} borderRadius="20px" colorScheme="teal" marginRight={2}>
          <Icon as={IoArrowBackCircle} boxSize={5} />
          &nbsp;Back To List
        </Button>
      </Flex>

      <form onSubmit={handleSubmit} id="login_form">
        <FormWrapper className={colorMode === 'light' ? 'form-wrapper-light' : 'form-wrapper-dark'}>
          <Stack spacing="6" direction="column">
            <TextInput
              name="username"
              label="Username"
              defaultValue={user.username}
              onChange={handleChange}
              variant="filled"
              errors={errors?.username}
              isRequired
            />
            <TextInput
              name="email"
              label="Email"
              defaultValue={user.email}
              onChange={handleChange}
              variant="filled"
              errors={errors?.email}
              isRequired
            />
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input defaultValue={user.password} onChange={handleChange} variant="filled" type="password" />
            </FormControl>
            <FormControl id="isAdmin">
              <HStack>
                <Checkbox defaultChecked={false} onChange={handleChangeCheckbox} />
                <FormLabel paddingTop="2">Is Admin?</FormLabel>
              </HStack>
            </FormControl>
          </Stack>
        </FormWrapper>
        <Divider />
        <Stack direction="row-reverse" py={1} px={2} spacing={2}>
          <Button type="submit" variant="solid" colorScheme="blue" leftIcon={<HiOutlineSave />} width="120px">
            Save
          </Button>
          <Button type="button" variant="solid" colorScheme="teal" leftIcon={<MdCancel />} width="120px">
            Cancel
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

UsersList.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UsersList;
