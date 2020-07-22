import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListPromotions from "../screens/ListPromotions";

configure({ adapter: new Adapter() });

describe('Tests d\'intégration liste des promotions', () => {
    const wrapper = shallow(<ListPromotions/>);

    it('Le titre est présent sur la page de la liste des promotions', () => {
        expect(wrapper.find('#titleList').exists().valueOf()).toEqual(true);
    });

    it('Le bouton retour sur la page d\'accueil est présent sur la page liste des promotions', () => {
        expect(wrapper.find('#buttonBackHome').exists().valueOf()).toEqual(true);
    })
});
