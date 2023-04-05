import { Page } from '@inertiajs/core';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@inertiajs/core/types/types';
import { InertiaSharedProps } from '@/types';

export default function useTypedPage<T extends PageProps = PageProps>(): Page<T & InertiaSharedProps> {
  const page = usePage();
  return page as Page<T & InertiaSharedProps>;
}
