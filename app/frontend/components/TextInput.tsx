import { ChangeEventHandler } from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

interface TextInputProps {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultValue: string;
  variant: string;
  type?: string;
  isRequired: boolean;
  errors?: string;
}

const TextInput = ({
  label,
  name,
  variant,
  type = undefined,
  onChange,
  defaultValue,
  isRequired = false,
  errors = undefined,
}: TextInputProps) => {
  const hasErrors = !!errors ?? false;

  return (
    <FormControl id={name} isInvalid={hasErrors}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} defaultValue={defaultValue} onChange={onChange} variant={variant} isRequired={isRequired} />
      <FormErrorMessage color="red">{errors}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
