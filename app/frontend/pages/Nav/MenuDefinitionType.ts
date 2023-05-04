import { IconType } from 'react-icons';
import { CallbackFnType } from '@/types/functionTypes';

type SubMenuOptionType = {
  path: string;
  label: string;
  Icon?: IconType;
  onClick?: CallbackFnType;
};

type MenuOptionType = {
  sectionId: string;
  sectionLabel: string;
  sectionItems?: SubMenuOptionType[];
  onClick?: CallbackFnType;
};

export type { MenuOptionType, SubMenuOptionType };
