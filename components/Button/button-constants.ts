import { ButtonVariantWithStyles } from './types';

export const BUTTON_STYLES: Record<ButtonVariantWithStyles, string> = {
  [ButtonVariantWithStyles.Primary]:
    'bg-primary text-white font-bold transition duration-100 ease-in-out hover:bg-primaryLight',
  [ButtonVariantWithStyles.Secondary]:
    'bg-secondary text-black font-bold transition duration-100 ease-in-out hover:bg-secondaryLight',
  [ButtonVariantWithStyles.Danger]: 'bg-red-500 text-white',
  [ButtonVariantWithStyles.LinearGradientPrimary]:
    'bg-gradient-to-r from-primary via-gray-300 to-gray-300 text-black font-bold transition duration-100 ease-in-out hover:from-gray-300 hover:to-primary',
  [ButtonVariantWithStyles.LinearGradientSecondary]:
    'bg-gradient-to-r from-gray-300 via-gray-300 to-secondary text-black font-bold transition duration-100 ease-in-out hover:from-secondary hover:to-gray-300',
};

export const DEFAULT_BUTTON_STYLES =
  'p-2 m-1 rounded-lg outline-none border-none';
