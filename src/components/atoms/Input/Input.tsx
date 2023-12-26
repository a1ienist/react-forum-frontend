import React, { useState } from 'react';
import styles from './Input.module.css'

interface InputProps {
 placeholder?: string;
 type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder = '', type = 'text' }) => {
 const [value, setValue] = useState('');

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setValue(event.target.value);
 };

 return (
   <input
   className={styles.input}
     type={type}
     value={value}
     placeholder={placeholder}
     onChange={handleChange}
   />
 );
};

export default Input;
