import React from 'react';
import { withRouter } from 'next/router';
import styles from '../styles/NavItem.module.css'

const NavItem = ({ href, onClick, children, router }) => (
    <span>
        <button
            type="button"
            onClick={onClick}
            className={
                    router.pathname === href ? styles.button.active : styles.button
            }>
            {children}
        </button>
    </span>
);

export default withRouter(NavItem);