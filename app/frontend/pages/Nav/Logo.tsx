import { Box, Image } from '@chakra-ui/react';

import AppLogo from '../../images/app-logo.png';

interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <Box w="161px" onClick={onClick} style={{ cursor: 'pointer' }}>
      <Image src={AppLogo} alt="App Logo" objectFit="cover" />
    </Box>
  );
};
Logo.defaultProps = {
  onClick: () => {},
};

export default Logo;
