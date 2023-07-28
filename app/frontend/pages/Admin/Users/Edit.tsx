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
  useDisclosure,
} from '@chakra-ui/react';
import { FaUserEdit } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
import { HiOutlineSave } from 'react-icons/hi';
import { MdCancel, MdDelete } from 'react-icons/md';

import ConfirmationDialog from '@/components/ConfirmationDialog';
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
  isAdmin: boolean;
};

type UserEditProps = {
  user: UserType;
  usersListPath: string;
  userPutPath: string;
  userDeletePath: string;
};

const UserEdit = ({ user, usersListPath, userPutPath, userDeletePath }: UserEditProps) => {
  const { flash, errors } = useTypedPage().props;
  const toast = useToast();
  const { colorMode } = useColorMode();
  const { data, setData } = useForm({
    username: user.username,
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin,
  });
  const {
    isOpen: isOpenDeleteConfirmation,
    onOpen: setOpenDeleteConfirmation,
    onClose: onCloseDeleteConfirmation,
  } = useDisclosure();

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
    console.log('userData: ', data);
    router.put(userPutPath, {
      user: { ...data },
    });
  };

  const doDelete = () => {
    router.delete(userDeletePath, {
      onSuccess: () => {
        goBack();
      },
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

  return (
    <>
      <Container padding={0} maxW="container.sm" id="page_container">
        <Flex justifyContent="space-between">
          <HStack paddingLeft={4}>
            <Icon as={FaUserEdit} boxSize={5} />
            <Heading size="md" flexDirection="column">
              Edit User
            </Heading>
          </HStack>
          <Button variant="outline" size="sm" onClick={goBack} borderRadius="20px" colorScheme="teal" marginRight={2}>
            <Icon as={IoArrowBackCircle} boxSize={5} />
            &nbsp;Back To List
          </Button>
        </Flex>

        <form onSubmit={handleSubmit} id="user_form">
          <FormWrapper className={colorMode === 'light' ? 'form-wrapper-light' : 'form-wrapper-dark'}>
            <Stack spacing="6" direction="column">
              <TextInput
                name="username"
                label="Username"
                value={data.username}
                onChange={handleChange}
                variant="filled"
                errors={errors?.username}
                isRequired
              />
              <TextInput
                name="email"
                label="Email"
                value={data.email}
                onChange={handleChange}
                variant="filled"
                errors={errors?.email}
                isRequired
              />
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={data.password} onChange={handleChange} variant="filled" type="password" />
              </FormControl>
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
              colorScheme="red"
              leftIcon={<MdDelete />}
              width="120px"
              onClick={() => setOpenDeleteConfirmation()}
            >
              Delete
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
      <ConfirmationDialog
        title="Confirm Deletion?"
        message="Do you want to delete this user?"
        isOpen={isOpenDeleteConfirmation}
        onConfirm={doDelete}
        onCancel={onCloseDeleteConfirmation}
      />
    </>
  );
};

UserEdit.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UserEdit;
