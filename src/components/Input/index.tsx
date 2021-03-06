import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, label, icon: Icon, value, ...rest}) => {
  const inputRef = useRef(null);
  const { fieldName, error, registerField } = useField(name);

  const hasValue = Boolean(!!value);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container hasValue={hasValue} isErrored={!!error}>
      {Icon && <Icon size={17}/>}
        <label>
          <input ref={inputRef} type="text" {...rest}/>
          <span>{label}</span>
        </label>
        {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
        )}
      </Container>
    </>
  );
}

export default Input;
