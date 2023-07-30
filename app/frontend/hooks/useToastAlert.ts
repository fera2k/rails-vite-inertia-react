import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

import { DEFAULT_TOAST_DURATION } from '@/constants/constants';

type FlashMessageType = {
  alert: string;
  success: string;
};

const useToastAlert = (flash: FlashMessageType) => {
  const toast = useToast();

  useEffect(() => {
    if (flash && flash.success) {
      toast({
        description: flash.success,
        status: 'success',
        duration: DEFAULT_TOAST_DURATION,
        isClosable: true,
      });
    }

    if (flash && flash.alert) {
      toast({
        description: flash.alert,
        status: 'error',
        duration: DEFAULT_TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [flash, toast]);
};

export default useToastAlert;
