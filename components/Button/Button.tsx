import { MouseEventHandler } from 'react';
import { ButtonSize, ButtonVariantWithStyles } from './types';
import { BUTTON_STYLES, DEFAULT_BUTTON_STYLES } from './button-constants';
import { getButtonSize } from './button-utils';

type ButtonProps = {
  variant: ButtonVariantWithStyles;
  className?: string;
  text?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  buttonSize?: ButtonSize;
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
