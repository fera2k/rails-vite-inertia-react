import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

interface ConfirmationDialogProps {
  title?: string;
  message: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

const ConfirmationDialog = ({ title, message, isOpen, onConfirm, onCancel = () => {} }: ConfirmationDialogProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onCancel} isCentered>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{message}</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              type="button"
              variant="solid"
              colorScheme="gray"
              leftIcon={<MdCancel />}
              width="120px"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              ref={cancelRef}
              type="button"
              variant="solid"
              colorScheme="green"
              leftIcon={<FaCheck />}
              width="120px"
              onClick={onConfirm}
              ml={3}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

ConfirmationDialog.defaultProps = {
  title: 'Confirm action?',
  onCancel: () => {},
};

export default ConfirmationDialog;
export type { ConfirmationDialogProps };
