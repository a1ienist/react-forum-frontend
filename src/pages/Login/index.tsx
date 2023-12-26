import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
 const [user, setUser] = useState<User>({ name: '', email: '', password: '' });

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setUser({ ...user, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   // Здесь вы можете обработать отправку формы
 };

 return (
   <form onSubmit={handleSubmit}>
     <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
     <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
     <input name="password" type="password" value={user.password} onChange={handleChange} placeholder="Password" />
     <button type="submit">Register</button>
   </form>
 );
};

const LoginForm: React.FC = () => {
 const [user, setUser] = useState<User>({ name: '', email: '', password: '' });

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setUser({ ...user, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   // Здесь вы можете обработать отправку формы
 };

 return (
   <form onSubmit={handleSubmit}>
     <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
     <input name="password" type="password" value={user.password} onChange={handleChange} placeholder="Password" />
     <button type="submit">Login</button>
   </form>
 );
};
