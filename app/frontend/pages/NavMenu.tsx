import { useEffect } from 'react';
import { router, Link as InertiaLink } from '@inertiajs/react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import AppLogo from '../images/app-logo.png';

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[] | undefined;
}

const defaultNavItem = {
  subItems: [],
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Admin',
    href: '',
    subItems: [
      {
        label: 'Users',
        href: '/admin/users',
      },
    ],
  },
  {
    label: 'Top Menu 1',
    href: '',
    subItems: [
      {
        label: 'Sub Menu 1a',
        href: '#',
      },
      {
        label: 'Sub Menu 2a',
        href: '#',
      },
    ],
  },
  {
    label: 'Searches Engines',
    href: '',
    subItems: [
      {
        label: 'Google',
        href: 'https://www.google.com',
      },
      {
        label: 'Bing',
        href: 'https://www.bing.com',
      },
    ],
  },
  {
    label: 'Top Link 1',
    href: '#',
    subItems: [],
  },
  {
    label: 'Top Link 2',
    href: '#',
    subItems: [],
  },
];

const DesktopSubNav = ({ label, href, subItems }: NavItem): JSX.Element => {
  return (
    <Link
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
    >
      <InertiaLink href={href}>
        <Stack direction="row" align="center">
          <Box>
            <Text transition="all .3s ease" _groupHover={{ color: 'green.400' }} fontWeight={500}>
              {label}
            </Text>
          </Box>
          <Flex
            transition="all .3s ease"
            transform="translateX(-10px)"
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify="flex-end"
            align="center"
            flex={1}
          >
            {subItems && subItems.length > 0 && <Icon color="green.400" w={5} h={5} as={ChevronRightIcon} />}
          </Flex>
        </Stack>
      </InertiaLink>
    </Link>
  );
};
DesktopSubNav.defaultProps = defaultNavItem;

const DesktopNav = ({ items }: { items: Array<NavItem> }): JSX.Element => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction="row" spacing={4}>
      {items.map((item) => (
        <Box key={item.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={2}
                href={item.href ?? '#'}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {item.label}
              </Link>
            </PopoverTrigger>

            {item.subItems && item.subItems.length > 0 && (
              <PopoverContent border={0} boxShadow="xl" bg={popoverContentBgColor} p={4} rounded="xl" minW="sm">
                <Stack>
                  {item.subItems.map((subItem: NavItem) => (
                    <DesktopSubNav
                      key={subItem.label}
                      label={subItem.label}
                      href={subItem.href}
                      subItems={subItem.subItems}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href, subItems }: NavItem): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={subItems && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {subItems && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {subItems &&
            subItems.map((item) => (
              <Link key={item.label} py={2} href={item.href}>
                {item.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
MobileNavItem.defaultProps = defaultNavItem;

const MobileNav = ({ items }: { items: Array<NavItem> }): JSX.Element => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {items.map((item: NavItem) => (
        <MobileNavItem key={item.label} label={item.label} href={item.href} subItems={item.subItems} />
      ))}
    </Stack>
  );
};

const NavMenu = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();

  const doLogout = () => {
    router.delete('/users/sign_out', {
      onSuccess: (response) => {
        console.log('response', response);
        router.visit('/');
      },
    });
  };

  useEffect(() => {
    router.on('error', (err) => {
      console.log('errors:', err);
    });
    router.on('invalid', (event) => {
      console.log('event(main): ', event);
      event.preventDefault();
    });
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box w="161px">
            <Image src={AppLogo} alt="App Logo" objectFit="cover" />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={5}>
            <Flex align="center">
              <DesktopNav items={NAV_ITEMS} />
            </Flex>
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
          <Button
            colorScheme="green"
            bg="green.400"
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            onClick={doLogout}
          >
            Logout
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav items={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};

export default NavMenu;
