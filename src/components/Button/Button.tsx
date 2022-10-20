import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className='e-btn'>{props.label}</button>;
};

export default Button;
