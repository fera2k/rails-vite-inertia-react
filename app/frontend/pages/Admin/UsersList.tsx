import { ReactNode } from 'react';
import {
  Flex,
  // Box,
  // FormControl,
  // FormLabel,
  // Input,
  // Checkbox,
  Stack,
  // Button,
  Heading,
  useColorModeValue,
  // Center,
  Table,
  TableContainer,
  Tbody,
  Thead,
  Td,
  Th,
  Tr,
} from '@chakra-ui/react';

import SimpleLayout from '../../layouts/SimpleLayout';

type UserType = {
  id: number;
  username: string;
  email: string;
};

type UsersListProps = {
  users: UserType[];
};

const UsersList = ({ users }: UsersListProps) => {
  return (
    <Flex direction="column" padding={4} justify="left" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack align="center">
        <Heading fontSize="2xl">Users List</Heading>
      </Stack>
      <TableContainer>
        <Table variant="simple" colorScheme="linkedin">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

UsersList.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UsersList;
