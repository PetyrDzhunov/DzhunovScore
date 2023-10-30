import { ButtonVariantWithStyles } from './types';

export const BUTTON_STYLES: Record<ButtonVariantWithStyles, string> = {
  [ButtonVariantWithStyles.Primary]: 'bg-primary text-white font-bold',
  [ButtonVariantWithStyles.Secondary]: 'bg-secondary text-black font-bold',
  [ButtonVariantWithStyles.Danger]: 'bg-red-500 text-white',
  [ButtonVariantWithStyles.LinearGradientPrimary]:
    'bg-gradient-to-r from-gray-300 via-gray-300 to-primary text-black font-bold',
  [ButtonVariantWithStyles.LinearGradientSecondary]:
    'bg-gradient-to-r from-secondary via-gray-300 to-gray-300 text-black font-bold',
};

export const DEFAULT_BUTTON_STYLES =
  'p-2 m-1 rounded-lg outline-none border-none';
