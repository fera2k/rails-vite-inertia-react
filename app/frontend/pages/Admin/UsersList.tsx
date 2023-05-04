import { ReactNode } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Column } from 'primereact/column';

import SimpleLayout from '@/layouts/SimpleLayout';
import RecordsGrid from '@/components/RecordsGrid';

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
    <Flex direction="column" padding={4} justify="left">
      <Heading fontSize="2xl" paddingStart="6">
        Users List
      </Heading>
      <RecordsGrid items={users} dataKey="id">
        <Column header="Username" field="username" />
        <Column header="Email" field="email" />
      </RecordsGrid>
    </Flex>
  );
};

UsersList.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UsersList;
