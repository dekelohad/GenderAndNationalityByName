
import React from 'react';
import { Navbar, Footer } from './components';
import { navbarLinks, footerContent } from './data';
import './Layout.css';

interface LayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar links={navbarLinks} />
            <main className="main">{children}</main>
            <Footer content={footerContent} />
        </>
    );
};

export default Layout;