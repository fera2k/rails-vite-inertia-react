import { ReactNode } from 'react';
import { Button, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <Button
      variant="ghost"
      cursor="pointer"
      as="a"
      size="sm"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default SocialButton;
