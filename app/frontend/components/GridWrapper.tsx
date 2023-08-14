import { Box } from '@chakra-ui/react';
import './styles/GridWrapperStyle.scss';

interface GridWrapperProps {
  id: string;
  children: React.ReactNode;
  height?: number | string;
}

const GridWrapper = ({ height = '100vh', children, id }: GridWrapperProps) => (
  <Box height={height} className="grid-wrapper" id={id}>
    {children}
  </Box>
);

export default GridWrapper;
