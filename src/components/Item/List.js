import React from 'react';
import styles from './List.css';

import Item from './Item';
import Loader from './Loader';

const dummydata = {
	area: 55,
	city: "Vårby",
	county: "Stockholms län",
	date_publish: "2018-10-08T00:00:00",
	get_first_image: "https://homeq-media.s3.amazonaws.com:443/estate_images/163a0353b47848629153a7b50ac91dad.JPG",
	id: 1547,
	latitude: 59.2642441,
	longitude: 17.8826837,
	overlay_image: "https://homeq-media.s3.amazonaws.com:443/d7dce7c7d7fe49028bd0357ce297dd24.png",
	rent: 7930,
	rooms: 2,
	status: "a",
	street: "Vårby Allé 36 "
}

const List = ({ list, fetching }) => {
	if (fetching) {
		return <Loader />;
	}

	return <div className={styles.list}>
		{/* <Item data={dummydata} /> */}
		{list.map(item => {
			return <Item data={item} />;
		})}
	</div>;
};

export default List;