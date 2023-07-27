import { useEffect, ReactNode } from 'react';
import { Container, Button, Tooltip, useToast } from '@chakra-ui/react';
import { FaUsers, FaPencilAlt } from 'react-icons/fa';

import { router } from '@inertiajs/react';
import { Column, ColumnShape } from 'react-base-table';

import SimpleLayout from '@/layouts/SimpleLayout';
import RecordsGrid from '@/components/RecordsGrid';
import useTypedPage from '@/hooks/useTypedPage';
import { DEFAULT_TOAST_DURATION } from '@/constants/constants';
import 'react-base-table/styles.css';

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
      <Tooltip hasArrow label="Edit record" openDelay={600}>
        <Button
          onClick={() => onClickAction('action', elem.rowData as UserType)}
          size="sm"
          variant="solid"
          colorScheme="teal"
        >
          <FaPencilAlt />
        </Button>
      </Tooltip>
    ),
  },
];

const UsersList = ({ users, newPath }: UsersListProps) => {
  const { flash, errors } = useTypedPage().props;
  const toast = useToast();

  useEffect(() => {
    if (flash && flash.success) {
      toast({
        description: flash.success,
        status: 'success',
        duration: DEFAULT_TOAST_DURATION,
        isClosable: true,
      });
    }

    if (flash && flash.alert) {
      toast({
        description: flash.alert,
        status: 'error',
        duration: DEFAULT_TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [flash, toast]);

  console.log('user list error: ', errors);

  return (
    <Container padding={0} maxWidth="container.lg" id="page_container">
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
