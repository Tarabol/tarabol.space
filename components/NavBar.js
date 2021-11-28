import React from "react";
import NavItem from "./NavItem";
import Link from 'next/link';
// import PNG from '../static/js.png';
// import './Nav.css';

export default function NavBar() {
    return (
        <nav>
            {/* <span className="logo logo-css"/> */}
            {/* <img src={PNG} className="logo" alt="Logo"/> */}
            <Link href="/" passHref><NavItem>Home</NavItem></Link>
            <Link href="/services" passHref><NavItem>Services</NavItem></Link>
            <Link href="/aboutus" passHref><NavItem>About Us</NavItem></Link>
            <Link href="/careers" passHref><NavItem>Careers</NavItem></Link>
            <Link href="/contact" passHref><NavItem>Contact</NavItem></Link>
        </nav>
    );
}