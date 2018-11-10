import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/Item/List';

import {openMobileMenu, closeMobileMenu} from './store/reducers/MainReducer';

import styles from './main.css';

const mapStateToProps = state => ({
	fetching: state.MainReducer.fetching,
	list: state.MainReducer.list,
	searchStarted: state.MainReducer.searchStarted,
	mobileMenuOpen: state.MainReducer.mobileMenuOpen,
	gotResult: state.MainReducer.fetching === true
});

const mapDispatchToProps = {
	openMobileMenu, closeMobileMenu
};

class Application extends React.Component {
	render () {
		const {
			list,
			fetching,
			searchStarted,
			openMobileMenu,
			closeMobileMenu,
			mobileMenuOpen,
			gotResult
		} = this.props;

		const mobileMenuProps = {gotResult:searchStarted, openMobileMenu, closeMobileMenu, isOpen: mobileMenuOpen};

		return <div className={styles.app}>
			<Header {...mobileMenuProps} />
			{searchStarted && <List list={list} fetching={fetching} />}
			<Footer />
		</div>
	}
};

export const detached = Application;
export default connect(mapStateToProps, mapDispatchToProps)(Application);