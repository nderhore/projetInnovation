import React from 'react';
import { configure, shallow } from 'enzyme';
import Home from '../screens/Home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tests d\'intégration HomePage', () => {
    const wrapper = shallow(<Home/>);

    it('Le titre est présent sur la page d\'accueil', () => {
        expect(wrapper.find('#titleHome').exists().valueOf()).toEqual(true);
    });

    it('Le bouton pour lister les promotions est présent', () => {
        expect(wrapper.find('#buttonListPromotions').exists().valueOf()).toEqual(true);
    });

    it('Le bouton pour scanner le Qr Code est présent', () => {
        expect(wrapper.find('#buttonScan').exists().valueOf()).toEqual(true);
    })

});
