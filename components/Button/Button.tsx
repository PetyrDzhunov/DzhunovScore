import { MouseEventHandler } from 'react';
import { ButtonSize, ButtonVariantWithStyles } from './types';
import { BUTTON_STYLES, DEFAULT_BUTTON_STYLES } from './button-constants';

type ButtonProps = {
  variant: ButtonVariantWithStyles;
  className?: string;
  text?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  buttonSize?: ButtonSize;
};

const getButtonSize = (buttonSize: ButtonSize): string => {
  if (buttonSize === 'small') {
    return 'px-2 py-1 w-20 text-sm'; // Example width and height for small size
  } else if (buttonSize === 'medium') {
    return 'px-4 py-2 w-32 text-base'; // Example width and height for medium size
  } else {
    return 'px-6 py-3 w-48 text-lg'; // Example width and height for large size
  }
};

const Button: React.FC<ButtonProps> = ({
  className = '',
  text,
  onClick,
  variant,
  buttonSize = 'medium',
}) => {
  const allClasses = `${DEFAULT_BUTTON_STYLES} ${getButtonSize(
    buttonSize,
  )} ${className} ${BUTTON_STYLES[variant]}`;
  return (
    <button className={allClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
