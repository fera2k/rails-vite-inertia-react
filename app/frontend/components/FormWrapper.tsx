import { Box } from '@chakra-ui/react';

import './styles/FormWrapperStyle.scss';

interface FormWrapperProps {
  children: React.ReactNode;
  className: string;
}

const FormWrapper = ({ className, children }: FormWrapperProps) => (
  <Box className={`form-wrapper ${className}`}>{children}</Box>
);

export default FormWrapper;
