import { ReactNode } from 'react';
import { Container, Button } from '@chakra-ui/react';
import { FaUsers, FaPencilAlt } from 'react-icons/fa';

import { router } from '@inertiajs/react';
import { Column, ColumnShape } from 'react-base-table';

import SimpleLayout from '@/layouts/SimpleLayout';
import 'react-base-table/styles.css';
import RecordsGrid from '@/components/RecordsGrid';

type UserType = {
  id: number;
  username: string;
  email: string;
};
type UserWithActionsType = UserType & { actions: string[] };

type UsersListProps = {
  users: UserWithActionsType[];
  newPath: string;
};

const onClickAction = (action: string, rowData: UserType) => {
  console.log(`action: ${action}, rowData:`, rowData);
};

const columns: ColumnShape[] = [
  {
    key: 'username',
    title: 'Username',
    dataKey: 'username',
    width: 0,
    resizable: true,
    sortable: true,
    flexGrow: 1,
  },
  {
    key: 'email',
    title: 'Email',
    dataKey: 'email',
    width: 0,
    sortable: true,
    flexGrow: 1,
  },
  {
    key: 'action',
    title: 'Actions',
    width: 0,
    align: Column.Alignment.CENTER,
    frozen: Column.FrozenDirection.RIGHT,
    flexGrow: 1,
    cellRenderer: (elem) => (
      <Button onClick={() => onClickAction('action', elem.rowData as UserType)} size="sm">
        <FaPencilAlt />
      </Button>
    ),
  },
];

const UsersList = ({ users, newPath }: UsersListProps) => {
  console.log(newPath);

  return (
    <Container padding={0} maxWidth="container.lg">
      <RecordsGrid
        title="User's List"
        titleIcon={FaUsers}
        items={users}
        columns={columns}
        height="calc(100vh - 250px)"
        onNewClick={() => router.visit(newPath)}
      />
    </Container>
  );
};

UsersList.layout = (page: ReactNode) => <SimpleLayout>{page}</SimpleLayout>;

export default UsersList;
