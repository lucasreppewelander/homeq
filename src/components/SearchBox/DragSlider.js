import React from 'react';
import PropTypes from 'prop-types';

import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';

import Rheostat from 'rheostat';
import styles from './DragSlider.css';

const Handle = ({className, ...restProps}) => {
	return <div className={styles.handle} {...restProps} />;
};

const ProgressBar = ({style}) => {
	return <div className={styles.progressBar} {...style} />;
};

class DragSlider extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			min: props.min || 0,
			max: props.max || 0
		};
	}

	render () {
		const minValue = this.state.min;
		const maxValue = this.state.max;
		const {min, max, values, onChange, snapPoints = []} = this.props;

		return <div className={styles.dragSlider}>
			<Rheostat
				min={min}
				max={max}
				snap={true}
				handle={Handle}
				progressBar={ProgressBar}
				snapPoints={snapPoints}
				values={[minValue, maxValue]}
				onChange={event => {
					this.setState({
						min: event.values[0],
						max: event.values[1]
					});

					onChange && onChange(event.values);
				}}
			/>
			<div className={styles.valuesLeft}>{this.state.min}</div>
			<div className={styles.valuesRight}>{this.state.max}</div>
		</div>
	}
};

DragSlider.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	values: PropTypes.arrayOf(PropTypes.number)
}

export default DragSlider;