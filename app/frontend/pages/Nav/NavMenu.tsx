import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import { MdDarkMode, MdLightMode, MdExpandMore, MdExpandLess } from 'react-icons/md';

import { CallbackFnType } from '@/types/functionTypes';
import { MenuOptionType } from './MenuDefinitionType';
import MenuToggle from './MenuToggle';
import Logo from './Logo';

interface NavMenuProps {
  menuOptions: MenuOptionType[];
  navigate: (path: string) => void;
  logoOnClick?: () => void;
}

const NavMenu = ({ menuOptions, navigate, logoOnClick }: NavMenuProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.200', 'gray.800');

  const onClickMenu = (callbackFn: CallbackFnType) => callbackFn && callbackFn();

  const showExpandIcon = (isExpanded: boolean) => (isExpanded ? <MdExpandLess /> : <MdExpandMore />);

  return (
    <>
      <Box bg={bg} px={4} position="sticky" top={0} boxShadow="md" zIndex={2}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <MenuToggle isOpen={isOpen} onToggle={onToggle} />
          <Center>
            <Logo onClick={logoOnClick} />
          </Center>
          <HStack alignItems="center" spacing={2}>
            <Box display={{ base: 'none', md: 'block' }}>
              {menuOptions.map((menu) => (
                <Menu key={menu.sectionId}>
                  <MenuButton as={Button} size="sm" ml={2} onClick={() => menu.onClick && onClickMenu(menu.onClick)}>
                    {menu.sectionLabel}
                  </MenuButton>
                  {menu.sectionItems && menu.sectionItems.length > 0 && (
                    <MenuList maxW="fit-content">
                      {menu.sectionItems?.map((menuItem) => {
                        const { label, path, Icon } = menuItem;
                        return (
                          <MenuItem key={label} onClick={() => navigate(path)}>
                            {Icon && <Icon size="1.25em" style={{ marginRight: '1rem' }} />}
                            {label}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  )}
                </Menu>
              ))}
            </Box>
            <IconButton
              size="sm"
              icon={colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
              aria-label="Change Color Theme"
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" display="flex" alignItems="center" onClick={logoOnClick}>
            <Heading size="md" onClick={onClose} fontWeight="extrabold">
              My App
            </Heading>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={0}>
            <Accordion allowMultiple>
              {menuOptions.map((menu) => (
                <AccordionItem key={menu.sectionId}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton display="flex" justifyContent="space-between" alignItems="center">
                        <Text m={0} fontWeight="bold" onClick={() => menu.onClick && menu.onClick()}>
                          {menu.sectionLabel}
                        </Text>
                        {menu.sectionItems && menu.sectionItems.length > 0 && showExpandIcon(isExpanded)}
                      </AccordionButton>
                      {menu.sectionItems && (
                        <AccordionPanel p={0}>
                          <List>
                            {menu.sectionItems.map(({ label, path, Icon }) => (
                              <ListItem
                                as={Button}
                                variant="ghost"
                                w="full"
                                borderRadius="0"
                                display="flex"
                                justifyContent="start"
                                p={3}
                                key={label}
                                onClick={() => navigate(path)}
                              >
                                {Icon && <ListIcon as={Icon} />}
                                <Text mt={-1}>{label}</Text>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionPanel>
                      )}
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="center" alignItems="center" borderTopWidth="1px">
            <ChakraLink href="https://chakra-ui.com/" target="_blank">
              <Text colorScheme="red" size="sm">
                Powered By Chakra-UI
              </Text>
            </ChakraLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
NavMenu.defaultProps = {
  logoOnClick: () => {},
};

export default NavMenu;
