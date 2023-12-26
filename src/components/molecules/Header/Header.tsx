import React, { FC } from 'react';
import Link from "next/link";
import Logo from '../../atoms/Logo/Logo';
import styles from './header.module.css'


const Header = () => {
 return (
 <div className = {styles.container}>  
 <Link href="/">
    <Logo className={styles.logo} src="https://higherlogicdownload.s3.amazonaws.com/IMPERVA/5a320e11-a0a9-46d3-9dc4-0f7a40d1c90f/UploadedImages/Property_Dark__2_.png" alt="Logo" />
 </Link>
    <div className={styles.registration}>
        <Link href="/register">SIGN IN</Link>
        <Link href="/login">LOG IN</Link>
      </div>
    </div>
 );
};

export default Header;
