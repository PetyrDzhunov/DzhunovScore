import { ButtonSize } from './types';

export const getButtonSize = (buttonSize: ButtonSize): string => {
  if (buttonSize === 'small') {
    return 'px-2 py-1 w-20 text-sm'; // Example width and height for small size
  } else if (buttonSize === 'medium') {
    return 'px-4 py-2 w-32 text-base'; // Example width and height for medium size
  } else {
    return 'px-6 py-3 w-48 text-lg'; // Example width and height for large size
  }
};
