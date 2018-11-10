import React from 'react';
import 'font-awesome/css/font-awesome.css';
import styles from './Item.css';

const Item = ({data}) => {
	const image = { backgroundImage: data.get_first_image };

	return <div key={data.id} className={styles.item}>
		<div className={styles.image}>
			<img className={styles.theImage} src={data.get_first_image} />
		</div>
		<div className={styles.shader} />
		<div className={styles.textHolder}>
			<h2>{data.street.trim()}</h2>
			<div className={styles.cityCounty}>
				<i className='fa fa-location-arrow fa-fw' />
				<div className={styles.boldTextUppercaseExtraMargin}>{data.city}</div>
				<div className={styles.boldTextUppercase}>{data.county}</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottomItem}>
					<i className='fa fa-usd fa-fw' />
					<span className={styles.boldTextUppercaseExtraMargin}>
						{data.rent + ' / månad'}
					</span>
				</div>
				<div className={styles.bottomItem}>
					<i className='fa fa-arrows-alt fa-fw' />
					<span className={styles.boldTextUppercaseExtraMargin}>
						{data.area + ' kvm'}
					</span>
				</div>
				<div className={styles.bottomItem}>
					<i className='fa fa-home fa-fw' />
					<span className={styles.boldTextUppercaseExtraMargin}>
						{data.rooms + ' rum'}
					</span>
				</div>
			</div>
		</div>	
	</div>;
};

export default Item;