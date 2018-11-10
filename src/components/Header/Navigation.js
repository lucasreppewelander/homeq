import React from 'react';

import styles from './Navigation.css';

export const NavLink = ({text, href}) => (
	<li className={styles.navItem}>
		<a className={styles.navLink} href={href}
		>{text}</a>
	</li>
);

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			startX: null,
			isOpen: props.isOpen
		}
	}
	render (){
		const {onMobileClick, isOpen} = this.props;

		return <div>
			<ul className={styles.navigation}>
				<NavLink text={'Search apartments'} href='#'  />
				<NavLink text={'FAQ'} href='#' />
				<NavLink text={'Create an account'} href='#' />
				<li className={styles.mobileNav}>
					<button className={styles.mobileNavButton} onClick={() => {
						this.setState({ isOpen: true });
						onMobileClick();
					}}>
						<i className='fa fa-bars' />
					</button>
				</li>
			</ul>
			<div
				className={this.state.isOpen ? styles.mobileNavigationOpen : styles.mobileNavigationClosed}
				draggable={true}
				onTouchStart={event => {
					this.setState({
						startX: event.targetTouches[0].clientX
					})
				}}
				onTouchMove={event => {
					const clientX = event.targetTouches[0].clientX;
					const startX = this.state.startX;

					if (startX > clientX && (startX - clientX) < startX && (startX - clientX) > 60 ) {
						this.setState({
							isOpen: false
						});
					}
				}}
			>
				<ul>
					<li><a onClick={evt => console.log('search clicked..')} className={styles.mobileNavigationLink} href="#search">{'Search apartments'}</a></li>
					<li><a className={styles.mobileNavigationLink} href="#">{'FAQ'}</a></li>
					<li><a className={styles.mobileNavigationLink} href="#">{'Create an account'}</a></li>
				</ul>
			</div>
		</div>
	}
}

export default Navigation;