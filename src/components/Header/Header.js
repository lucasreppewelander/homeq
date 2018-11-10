import React from 'react';
import Navigation from './Navigation';
import SearchBox from '../SearchBox/SearchBox';
import Item from '../Item/Item';

import logo from '../../../assets/homeq_dark.svg';
import styles from './Header.css';

// hard coded ads, these could be fetched from an api or similar.
// but for this one, i just hard code them here..
const featuredAds = [{
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
}, {"id": 1237, "city": "Norsborg", "street": "Iduns V\u00e4g 13 ", "county": "Stockholms l\u00e4n", "rooms": 4.0, "area": 90.0, "rent": 10053, "status": "a", "get_first_image": "https://homeq-media.s3.amazonaws.com:443/apartment_images/fcf88c07602141c4aea05cfffd6aedfe.jpg", "longitude": 17.8166279, "latitude": 59.2469824, "date_publish": "2018-08-28T00:00:00", "overlay_image": ""}]

const Header = (props) => {
	return (
		<div className={styles.header}>
			<div className={styles.shader} />
			<div className={styles.wrapper}>
				<img className={styles.logo} src={logo} />
				<Navigation
					isOpen={props.isOpen}
					onMobileClick={props.openMobileMenu}
				/>

				<div className={styles.boxWrapper}>
					<div className={styles.searchBox}>
						<SearchBox />
					</div>
					<div className={!props.gotResult ? styles.searchBoxMiddle : styles.searchBoxMiddleFix}>
						<h1 className={styles.title}>
							{'Find your next apartment'}
						</h1>
						<h3 className={styles.subtitle}>
							{'Discover apartments wherever you like'}
						</h3>

						<div className={styles.cardArea}>
							<h3 className={styles.subtitleCardArea}>{'Featured apartments'}</h3>
							<div className={styles.cardAreaItemWrapper}>
								{featuredAds.map(item => {
									return <Item key={item.id} data={item} />
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;