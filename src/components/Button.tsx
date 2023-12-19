import { ComponentProps } from 'react';
import * as stylex from '@stylexjs/stylex';

type ButtonProps = {
  variant?: 'primary' | 'danger';
  styles?: stylex.StyleXStyles<{ margin: string }>; // only margin can be applied
} & ComponentProps<'button'>;

const BUTTON_STYLES = stylex.create({
  base: {
    borderWidth: 'none',
    backgroundColor: 'none',
    padding: '.5em 1em',
    borderRadius: '.25em',
    cursor: 'pointer',
  },
  primary: {
    color: 'green',
    backgroundColor: 'white',
  },
  danger: {
    color: 'red',
    backgroundColor: 'white',
  },
});

const Button = ({ variant = 'primary', styles, ...props }: ButtonProps) => {
  return (
    <button
      {...stylex.props(BUTTON_STYLES.base, BUTTON_STYLES[variant], styles)}
      {...props}
    />
  );
};

export default Button;
