import React from 'react';
import styles from './styles.module.css';

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
};

const Checkbox = React.memo((props: CheckboxProps) => {
  const { onChange, id, label, checked, disabled } = props;

  return (
    <div className={styles.wrapper}>
      <input
        disabled={disabled}
        id={id}
        type="checkbox"
        className={checked ? styles.checked : ''}
        checked={checked}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
});
export default Checkbox;
