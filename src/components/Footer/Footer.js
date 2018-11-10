import React from 'react';
import styles from './Footer.css';

import { NavLink } from '../Header/Navigation';
import logo from '../../../assets/homeq_dark.svg';

const footerLinksCol1 = [
	{text: 'Find apartments', href: '/'},
	{text: 'Frequently asked questions', href: '/faq'},
	{ text: 'Custom link', href: '/link32' }
];

const footerLinksCol2 = [
	{text: 'Account', href: '/account'},
	{text: 'Register', href: '/register'},
	{text: 'Login', href: '/login'}
];

const footerLinksCol3 = [
	{ text: 'Open positions', href: '/open-positions' },
	{ text: 'Other link 1', href: '/link1' },
	{ text: 'Another link', href: '/link2' }
];

const footerLinksCol4 = [
	{ text: 'Terms', href: '/terms' },
	{ text: 'Privacy', href: '/privacy' }
];

const SocialMediaLinks = () => {
	return <ul className={styles.socialMediaLinksList}>
		<li className={styles.socialMediaLinksListItem}>
			<a className={styles.socialMediaLinks} href="#">
				<i style={{color: '#fff', fontSize: '28px'}} className='fa fa-facebook fa-lg fa-fw' />
			</a>
		</li>
		<li className={styles.socialMediaLinksListItem}>
			<a className={styles.socialMediaLinks} href="#">
				<i style={{color: '#fff', fontSize: '28px'}} className='fa fa-twitter fa-lg fa-fw' />
			</a>
		</li>
		<li className={styles.socialMediaLinksListItem}>
			<a className={styles.socialMediaLinks} href="#">
				<i style={{color: '#fff', fontSize: '28px'}} className='fa fa-instagram fa-lg fa-fw' />
			</a>
		</li>
	</ul>;
};

const Footer = () => {
	return <div className={styles.footer}>
		<div className={styles.columnWrapper}>
			<div className={styles.column}>
				<h3 className={styles.footerColumnTitle}>{'HomeQ'}</h3>
				<ul className={styles.footerList}>
					{footerLinksCol1.map(item => {
						return <li key={`list-${item.text}`} className={styles.footerLinkListItem}>
							<a className={styles.footerLink} key={item.text} href={item.href}>{item.text}</a>
						</li>
					})}
				</ul>
			</div>
			<div className={styles.column}>
				<h3 className={styles.footerColumnTitle}>{'For users'}</h3>
				<ul className={styles.footerList}>
					{footerLinksCol2.map(item => {
						return <li key={`list-${item.text}`} className={styles.footerLinkListItem}>
							<a className={styles.footerLink} key={item.text} href={item.href}>{item.text}</a>
						</li>
					})}
				</ul>
			</div>
			<div className={styles.column}>
				<h3 className={styles.footerColumnTitle}>{'About us'}</h3>
				<ul className={styles.footerList}>
					{footerLinksCol3.map(item => {
						return <li key={`list-${item.text}`} className={styles.footerLinkListItem}>
							<a className={styles.footerLink} key={item.text} href={item.href}>{item.text}</a>
						</li>
					})}
				</ul>
			</div>
			<div className={styles.column}>
				<SocialMediaLinks />
				<ul className={styles.footerList}>
					{footerLinksCol4.map(item => {
						return <li key={`list-${item.text}`} className={styles.footerLinkListItem}>
							<a className={styles.footerLink} key={item.text} href={item.href}>{item.text}</a>
						</li>
					})}
					<li className={styles.footerLinkListItemSingle}>{'Copyright 2018 HomeQ'}</li>
				</ul>
			</div>
		</div>
		<div className={styles.bottomBar}>
			<img src={logo} className={styles.footerLogo} />
		</div>
	</div>;
};

export default Footer;