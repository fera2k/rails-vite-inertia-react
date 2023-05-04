import { Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface MenuToggleProps {
  onToggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ onToggle, isOpen }: MenuToggleProps) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={onToggle}
      aria-label="Open Menu"
      style={{ cursor: 'pointer' }}
    >
      {isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
    </Box>
  );
};

export default MenuToggle;
