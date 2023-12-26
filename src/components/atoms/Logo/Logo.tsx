
import React, { FC } from 'react';
import NextImage from 'next/image';

type LogoProps = {  
  className?: string;
  src: string;
  alt: string;
};

const Logo: FC<LogoProps> = ({ src, alt }) => {
  return (
    <NextImage src={src} alt={alt} />
  );
};

export default Logo;
