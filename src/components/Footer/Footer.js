import React from 'react';
import styles from './Footer.css';

import { NavLink } from '../Header/Navigation';
import logo from '../../../assets/homeq_dark.svg';

const footerLinksCol1 = [
	{text: 'Find apartments', href: '/'},
	{text: 'Frequently asked questions', href: '/faq'}
];

const footerLinksCol2 = [
	{text: 'Account', href: '/account'},
	{text: 'Register', href: '/register'},
	{text: 'Login', href: '/login'}
];

const footerLinksCol3 = [
	{ text: 'Open positions', href: '/open-positions' }
];

const footerLinksCol4 = [
	{ text: 'Terms', href: '/terms' },
	{ text: 'Privacy', href: '/privacy' }
];

const SocialMediaLinks = () => {
	return null;
};

const Footer = () => {
	return <div className={styles.footer}>
		<div className={styles.columnWrapper}>
			<div className={styles.column}>
				<h3 className={styles.footerColumnTitle}>{'HomeQ'}</h3>
				<ul>
					{footerLinksCol1.map(item => {
						return <NavLink key={item.text} text={item.text} href={item.href} />;
					})}
				</ul>
			</div>
			<div className={styles.column}>
				<h3 className={styles.footerColumnTitle}>{'HomeQ'}</h3>
				<ul>
					{footerLinksCol2.map(item => {
						return <NavLink key={item.text} text={item.text} href={item.href} />;
					})}
				</ul>
			</div>
			<div className={styles.column}>
				<h3 className={styles.footerColumnTitle}>{'HomeQ'}</h3>
				<ul>
					{footerLinksCol3.map(item => {
						return <NavLink key={item.text} text={item.text} href={item.href} />;
					})}
				</ul>
			</div>
			<div className={styles.column}>
				<SocialMediaLinks />
				<ul>
					{footerLinksCol4.map(item => {
						return <NavLink key={item.text} text={item.text} href={item.href} />;
					})}
				</ul>
			</div>
		</div>
		<div className={styles.bottomBar}>
			<img src={logo} className={styles.footerLogo} />
		</div>
	</div>;
};

export default Footer;