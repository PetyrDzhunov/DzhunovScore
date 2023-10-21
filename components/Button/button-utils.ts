import { ButtonSize } from './types';

export const getButtonSize = (buttonSize: ButtonSize): string => {
  if (buttonSize === 'small') {
    return 'px-2 py-1 w-20 text-sm';
  } else if (buttonSize === 'medium') {
    return 'px-4 py-2 w-32 text-base';
  } else {
    return 'px-6 py-3 w-48 text-lg';
  }
};
