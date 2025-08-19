import React from 'react';
import Link from 'next/link';

type NavLinksProps = {
  onClick?: () => void;
  className?: string;
};

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Works' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Prices' },
];

const NavLinks = ({ onClick = () => {}, className = '' }: NavLinksProps) => {
  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClickCapture={onClick}
          className={`text-nav text-ink   break-words ${className} hover:text-main-gradient transition-colors duration-300`}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
