import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {NavLink} from '../src/components/Header/Navigation';
import Navigation from '../src/components/Header/Navigation';
import {detached as Application} from '../src/Application';
import DragSlider from '../src/components/SearchBox/DragSlider';
import {detached as SearchBox} from '../src/components/SearchBox/SearchBox';

describe('Renders', () => {
	it('Application', () => {
		const wrapper = shallow(<Application />);
		expect(wrapper.find('.app')).toHaveLength(1);
	});

	it('Navigation', () => {
		const wrapper = shallow(<Navigation />);
		expect(wrapper.find('ul')).toHaveLength(1);
	});

	it('NavLink', () => {
		const wrapper = shallow(<NavLink text={'Lucas'} href={'/lucas'} />);
		expect(wrapper.find('li')).toHaveLength(1);
	});

	it('DragSlider', () => {
		const defaultProps = {min: 1, max: 10, values:[1,10]}
		const wrapper = shallow(<DragSlider {...defaultProps} />);
		expect(wrapper.find('.dragSlider')).toHaveLength(1);
	});

	it('SearchBox', () => {
		const defaultProps = {
			query: 'lucas',
			rooms: {min: 1, max: 10, values:[1,10]},
			rent: {min: 1, max: 10, values:[1,10]},
			area: {min: 1, max: 10, values:[1,10]}
		}
		const wrapper = shallow(<SearchBox {...defaultProps} />);
		expect(wrapper.find('input')).toHaveLength(1);
		expect(wrapper.find('button')).toHaveLength(1);
	});
});