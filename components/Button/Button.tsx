import { MouseEventHandler } from 'react';
import { ButtonVariantWithStyles } from './types';
import { BUTTON_STYLES, DEFAULT_BUTTON_STYLES } from './button-constants';

type ButtonProps = {
  className?: string;
  text?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  variant: ButtonVariantWithStyles;
};

const Button: React.FC<ButtonProps> = ({
  className = '',
  text,
  onClick,
  variant,
}) => {
  const allClasses = `${DEFAULT_BUTTON_STYLES} ${className} ${BUTTON_STYLES[variant]}`;
  return (
    <button className={allClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
