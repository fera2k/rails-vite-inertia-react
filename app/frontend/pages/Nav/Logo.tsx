import { Box } from '@chakra-ui/react';

import AppLogoIcon from '@/icons/AppLogoIcon';

interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <Box onClick={onClick} style={{ cursor: 'pointer' }}>
      <AppLogoIcon width={80} height={60} fill="#309795" />
    </Box>
  );
};
Logo.defaultProps = {
  onClick: () => {},
};

export default Logo;
