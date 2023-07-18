import { ReactNode } from 'react';
import { router } from '@inertiajs/react';
import {
  Box,
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
  // useColorModeValue,
} from '@chakra-ui/react';
import { FaUserPlus } from 'react-icons/fa';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

import SimpleLayout from '@/layouts/SimpleLayout';
import FormWrapper from '@/components/FormWrapper';

type UserType = {
  id: number;
  username: string;
  email: string;
};

type UsersNewProps = {
  user: UserType;
};

const UsersList = ({ user }: UsersNewProps) => {
  const goBack = () => {
    router.visit('/admin/users/');
  };

  return (
    <Container maxW="container.sm">
      <Box as="form">
        <Stack
          spacing="5"
          px={{
            base: '4',
            md: '6',
          }}
          py={{
            base: '5',
            md: '6',
          }}
        >
          <Flex justifyContent="space-between">
            <HStack>
              <FaUserPlus />
              <Heading size="md" flexDirection="column">
                New User
              </Heading>
            </HStack>
            <Button variant="ghost" size="md" onClick={goBack} borderRadius="20px" colorScheme="cyan">
              <Icon as={IoArrowBackCircleOutline} boxSize={5} />
              &nbsp;Back To List
            </Button>
          </Flex>

          <FormWrapper>
            <Stack spacing="6" direction="column">
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input defaultValue={user.username} colorScheme="cyan" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input defaultValue={user.email} />
              </FormControl>
              <FormControl id="isAdmin">
                <HStack>
                  <Checkbox defaultChecked={false} disabled />
                  <FormLabel paddingTop="2">Is Admin?</FormLabel>
                </HStack>
              </FormControl>
            </Stack>
          </FormWrapper>
        </Stack>
        <Divider />
        <Stack
          direction="row-reverse"
          py="4"
          px={{
            base: '4',
            md: '6',
          }}
          spacing={2}
        >
          <Button type="submit" variant="solid" colorScheme="blue">
            Save
          </Button>
          <Button type="submit" variant="solid" colorScheme="gray">
            Cancel
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

UsersList.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UsersList;
