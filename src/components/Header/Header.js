import React from 'react';
import Navigation from './Navigation';
import SearchBox from '../SearchBox/SearchBox';

import logo from '../../../assets/homeq_dark.svg';
import styles from './Header.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src={logo} />
			<div className={styles.shader} />
			<Navigation />

			<div className={styles.boxWrapper}>
				<div className={styles.searchBox}>
					<SearchBox />
				</div>
				<div className={styles.searchBoxRight}>
					<h1 className={styles.title}>
						{'Find your next apartment'}
					</h1>
					<h3 className={styles.subtitle}>
						{'Discover apartments wherever you like'}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Header;