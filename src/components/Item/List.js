import React from 'react';
import styles from './List.css';

import Item from './Item';
import Loader from './Loader';

const List = ({ list, fetching }) => {
	if (fetching) {
		return <Loader />;
	}

	return <div className={styles.list}>
		<h2 className={styles.listTitle}>{'Your search generated the following results:'}</h2>
		<div className={styles.innerlist}>
			{list.map(item => {
				return <Item key={`list-item-${item.id}`} data={item} />;
			})}
		</div>
	</div>;
};

export default List;