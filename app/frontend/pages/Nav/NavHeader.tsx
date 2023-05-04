import { useDisclosure } from '@chakra-ui/react';
import { router } from '@inertiajs/react';
import { FaUsers } from 'react-icons/fa';

import ConfirmationDialog from '@/components/ConfirmationDialog';
import { MenuOptionType } from './MenuDefinitionType';

import NavMenu from './NavMenu';

const NavHeader = () => {
  const {
    isOpen: isOpenLogoutConfirmation,
    onOpen: setOpenLogoutConfirmation,
    onClose: onCloseLogoutConfirmation,
  } = useDisclosure();
  const navigate = (path: string) => router.visit(path);

  const doLogout = () => {
    router.delete('/users/sign_out', {
      onSuccess: (response) => {
        console.log('response', response);
        router.visit('/');
      },
    });
  };

  const menuOptions: MenuOptionType[] = [
    {
      sectionId: 'mnu-admin',
      sectionLabel: 'Admin',
      sectionItems: [
        {
          path: '/admin/users',
          label: 'Users',
          Icon: FaUsers,
        },
        {
          path: '/test',
          label: 'Test',
        },
      ],
    },
    {
      sectionId: 'mnu-logout',
      sectionLabel: 'Logout',
      sectionItems: [],
      onClick: () => setOpenLogoutConfirmation(),
    },
  ];

  return (
    <>
      <NavMenu menuOptions={menuOptions} navigate={navigate} logoOnClick={() => navigate('/')} />
      <ConfirmationDialog
        title="Confirm Logout?"
        message="Do you want to terminate your session?"
        isOpen={isOpenLogoutConfirmation}
        onConfirm={doLogout}
        onCancel={onCloseLogoutConfirmation}
      />
    </>
  );
};

export default NavHeader;
