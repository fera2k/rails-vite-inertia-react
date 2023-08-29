import { ReactNode, SyntheticEvent, FormEvent, useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { FaUserEdit } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
import { HiOutlineSave } from 'react-icons/hi';
import { MdCancel, MdDelete } from 'react-icons/md';

import { formatDateFromIso } from '@/shared/dateUtils';
import ConfirmationDialog from '@/components/ConfirmationDialog';
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
  password_confirmation: string;
  isAdmin: boolean;
  updated_at: string;
};

type UserEditProps = {
  user: UserType;
  usersListPath: string;
  userPutPath: string;
  userDeletePath: string;
};

const UserEdit = ({ user, usersListPath, userPutPath, userDeletePath }: UserEditProps) => {
  const { flash, errors } = useTypedPage().props;
  const { colorMode } = useColorMode();
  const [showPassowordField, setShowPasswordField] = useState(false);
  const { data, setData, put, isDirty, processing, setDefaults } = useForm({
    username: user.username,
    email: user.email,
    password: user.password,
    password_confirmation: user.password_confirmation,
    isAdmin: user.isAdmin,
  });
  const {
    isOpen: isOpenDeleteConfirmation,
    onOpen: setOpenDeleteConfirmation,
    onClose: onCloseDeleteConfirmation,
  } = useDisclosure();
  useToastAlert(flash);

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
    put(userPutPath, {
      onSuccess: () => {
        setDefaults();
      },
    });
  };

  const doDelete = () => {
    router.delete(userDeletePath, {
      onSuccess: () => {
        goBack();
      },
    });
  };

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
          <FormWrapper className={colorMode === 'light' ? 'form-wrapper__light' : 'form-wrapper__dark'}>
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
              {!showPassowordField && (
                <Button
                  type="button"
                  variant="link"
                  colorScheme="blue"
                  width="120px"
                  onClick={() => setShowPasswordField(true)}
                >
                  Edit Password
                </Button>
              )}
              {showPassowordField && (
                <Stack direction={{ base: 'column', sm: 'row' }}>
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
                  <TextInput
                    name="password_confirmation"
                    label="Confirm Password"
                    value={data.password_confirmation}
                    onChange={handleChange}
                    variant="filled"
                    errors={errors?.password_confirmation}
                    type="password"
                    autoComplete={false}
                    isRequired
                  />
                </Stack>
              )}
              <FormControl id="isAdmin">
                <HStack>
                  <Checkbox checked={data.isAdmin} onChange={handleChangeCheckbox} />
                  <FormLabel paddingTop="2">Is Admin?</FormLabel>
                </HStack>
              </FormControl>
            </Stack>
            <Stack direction="row" color="gray.400" fontSize="xs">
              <Text>Last modified at:&nbsp;</Text>
              <Text fontWeight="bold">{formatDateFromIso(user.updated_at)}</Text>
            </Stack>
          </FormWrapper>
          <Stack direction="row-reverse" py={1} px={2} spacing={2}>
            <Button
              type="submit"
              variant="solid"
              colorScheme="blue"
              leftIcon={<HiOutlineSave />}
              width="120px"
              isDisabled={!isDirty || processing}
            >
              Save
            </Button>
            <Button
              type="button"
              variant="solid"
              colorScheme="red"
              leftIcon={<MdDelete />}
              width="120px"
              isDisabled={processing}
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
              isDisabled={processing}
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
