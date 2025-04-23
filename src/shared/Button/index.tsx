import React from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = React.memo((props: ButtonProps) => {
  const { label, onClick, disabled } = props;

  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
});
export default Button;
