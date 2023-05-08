import { ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import { Column } from 'primereact/column';
import { FaUsers } from 'react-icons/fa';
import { router } from '@inertiajs/react';

import SimpleLayout from '@/layouts/SimpleLayout';
import RecordsGrid from '@/components/RecordsGrid';

type UserType = {
  id: number;
  username: string;
  email: string;
};

type UsersListProps = {
  users: UserType[];
  newPath: string;
};

const UsersList = ({ users, newPath }: UsersListProps) => {
  return (
    <Container padding={0} maxWidth="container.lg">
      <RecordsGrid
        title="User's List"
        titleIcon={FaUsers}
        items={users}
        dataKey="id"
        scrollHeight="calc(100vh - 300px)"
        onNewClick={() => router.visit(newPath)}
      >
        <Column header="Username" field="username" headerStyle={{ width: '30%' }} />
        <Column header="Email" field="email" />
      </RecordsGrid>
    </Container>
  );
};

UsersList.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UsersList;
