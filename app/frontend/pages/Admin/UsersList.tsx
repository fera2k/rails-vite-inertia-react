import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { Column } from 'primereact/column';
import { FaUsers } from 'react-icons/fa';

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
      <RecordsGrid
        title="User's List"
        titleIcon={FaUsers}
        items={users}
        dataKey="id"
        scrollHeight="calc(100vh - 300px)"
      >
        <Column header="Username" field="username" headerStyle={{ width: '30%' }} />
        <Column header="Email" field="email" />
      </RecordsGrid>
    </Flex>
  );
};

UsersList.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UsersList;
