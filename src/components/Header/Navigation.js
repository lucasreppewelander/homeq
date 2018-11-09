import React from 'react';

import styles from './Navigation.css';

export const NavLink = ({text, href}) => (
	<li className={styles.navItem}>
		<a className={styles.navLink} href={href}
		>{text}</a>
	</li>
);

const Navigation = () => (
	<ul className={styles.navigation}>
		<NavLink text={'Search apartments'} href='/'  />
		<NavLink text={'FAQ'} href='/faq' />
		<NavLink text={'Create an account'} href='/register' />
	</ul>
);

export default Navigation;