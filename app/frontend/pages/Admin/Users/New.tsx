import { ReactNode, SyntheticEvent, FormEvent } from 'react';
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
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { FaUserPlus } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
import { HiOutlineSave } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';

import SimpleLayout from '@/layouts/SimpleLayout';
import FormWrapper from '@/components/FormWrapper';
import TextInput from '@/components/TextInput';
import useTypedPage from '@/hooks/useTypedPage';
import useToastAlert from '@/hooks/useToastAlert';

type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

type UserNewProps = {
  user: UserType;
  usersListPath: string;
  userPostPath: string;
};

const UserNew = ({ user, usersListPath, userPostPath }: UserNewProps) => {
  const { flash, errors } = useTypedPage().props;
  useToastAlert(flash);
  const { colorMode } = useColorMode();
  const { data, setData } = useForm({
    username: user.username,
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin,
  });

  const goBack = () => {
    router.visit(usersListPath);
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

      <form onSubmit={handleSubmit} id="user_form">
        <FormWrapper className={colorMode === 'light' ? 'form-wrapper__light' : 'form-wrapper__dark'}>
          <Stack spacing="6" direction="column">
            <TextInput
              name="username"
              label="Username"
              value={data.username}
              onChange={handleChange}
              variant="filled"
              errors={errors?.username}
              autoComplete={false}
              isRequired
            />
            <TextInput
              name="email"
              label="Email"
              value={data.email}
              onChange={handleChange}
              variant="filled"
              errors={errors?.email}
              autoComplete={false}
              isRequired
            />
            <TextInput
              name="password"
              label="Password"
              value={data.password}
              onChange={handleChange}
              variant="filled"
              errors={errors?.password}
              type="password"
              autoComplete={false}
              isRequired
            />
            <FormControl id="isAdmin">
              <HStack>
                <Checkbox checked={data.isAdmin} onChange={handleChangeCheckbox} />
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
          <Button
            type="button"
            variant="solid"
            colorScheme="teal"
            leftIcon={<MdCancel />}
            width="120px"
            onClick={goBack}
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

UserNew.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UserNew;
