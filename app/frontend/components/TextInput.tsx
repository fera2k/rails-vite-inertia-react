import { ChangeEventHandler } from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

interface TextInputProps {
  label: string;
  name: string;
  value?: string;
  variant?: string;
  type?: string;
  isRequired: boolean;
  autoComplete?: boolean;
  errors?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({
  label,
  name,
  variant = 'filled',
  type = undefined,
  value,
  isRequired = false,
  autoComplete = true,
  errors = undefined,
  onChange,
}: TextInputProps) => {
  const hasErrors = !!errors ?? false;
  const autoCompleteValue = autoComplete ? 'on' : 'off';
  console.log('value: ', value);
  return (
    <FormControl id={name} isInvalid={hasErrors}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value || ''}
        onChange={onChange}
        variant={variant}
        isRequired={isRequired}
        autoComplete={autoCompleteValue}
      />
      <FormErrorMessage color="red">{errors}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
