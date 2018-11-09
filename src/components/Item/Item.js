import React from 'react';
import styles from './Item.css';

const Item = ({data}) => {
	console.log(data);
	return <div key={data.id} className={styles.item}>
		<div className={styles.image}>
			<img className={styles.img} src={data.get_first_image} />
		</div>
		<h2>{data.street.trim()}</h2>
	</div>;
};

export default Item;