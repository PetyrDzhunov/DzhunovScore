import { ButtonVariantWithStyles } from './types';

export const BUTTON_STYLES: Record<ButtonVariantWithStyles, string> = {
  [ButtonVariantWithStyles.Primary]: 'bg-primary text-white font-bold',
  [ButtonVariantWithStyles.Secondary]: 'bg-secondary text-black font-bold',
  [ButtonVariantWithStyles.Danger]: 'bg-red-500 text-white',
};

export const DEFAULT_BUTTON_STYLES =
  'p-2 m-1 rounded-lg outline-none border-none';
