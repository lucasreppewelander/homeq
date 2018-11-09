import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/Item/List';

const mapStateToProps = state => ({
	fetching: state.MainReducer.fetching,
	list: state.MainReducer.list
});

const mapDispatchToProps = {};

class Application extends React.Component {
	render () {
		const { list, fetching } = this.props;
		
		return <div className='app'>
			<Header />
			<List list={list} fetching={fetching} />
			<Footer />
		</div>
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);