import React from 'react';
import { connect } from 'react-redux';
import { setData, doSearch } from '../../store/reducers/MainReducer';

import styles from './SearchBox.css';
import DragSlider from './DragSlider';

const mapStateToProps = state => {
	return ({
		query: state.MainReducer.query,
		rooms: { min: state.MainReducer.rooms[0], max: state.MainReducer.rooms[1] },
		area: { min: state.MainReducer.area[0], max: state.MainReducer.area[1] },
		rent: { min: state.MainReducer.rent[0], max: state.MainReducer.rent[1] }
	})
};

const mapDispatchToProps = {
	setData,
	doSearch
};

class SearchBox extends React.Component {
	constructor(props) {
		super(props);

	}

	setSelection() {
		this.valueInput.select();
	}

	render () {
		const { query, rooms, area, rent, setData, doSearch } = this.props;

		return <div className={styles.searchBox}>
			<div className={styles.control}>
				<label className={styles.label}>
					{'WHERE DO YOU WANT TO LIVE?'}
					<input
						type="text"
						onFocus={() => this.setSelection()}
						ref={input => this.valueInput = input}
						value={query.length ? query : 'Anywhere'}
						className={styles.input}
						onChange={event => setData(event.target.value, 'query')}
					/>
				</label>
			</div>

			<div className={styles.control}>
				<label className={styles.label}>
					{'Rooms'}
					<DragSlider
						min={1}
						max={8}
						values={[rooms.min, rooms.max]}
						onChange={values => setData(values, 'rooms')}
					/>
				</label>
			</div>

			<div className={styles.control}>
				<label className={styles.label}>
					{'Area (m2)'}
					<DragSlider min={10} max={300} values={[area.min, area.max]} onChange={values => setData(values, 'area')} />
				</label>
			</div>

			<div className={styles.control}>
				<label className={styles.label}>
					{'Monthly rent'}
					<DragSlider
						min={1000}
						max={20000}
						values={[rent.min, rent.max]}
						onChange={values => setData(values, 'rent')}
						snapPoints={[
							1000,2000,3000,4000,5000,6000,7000,
							8000,9000,10000,11000,12000,13000,
							14000,15000,16000,17000,18000,19000,20000
						]}
					/>
				</label>
			</div>
			
			<button
				onClick={() => doSearch({ query, rooms, area, rent })}
				className={styles.searchButton}
			>{'Find your new home'}</button>
		</div>
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);