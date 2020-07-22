import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Promotion from "../screens/Promotion";

configure({ adapter: new Adapter() });

describe('Tests d\'intégration sur une promotion', () => {
    const wrapper = shallow(<Promotion route={{params: {hashQrCode: "PULL5"}}} />);

    it('Le titre est présent sur la page d\'une promotion', () => {
        expect(wrapper.find('#titlePromotion').exists().valueOf()).toEqual(true);
    });

    it('Le bouton retour sur la page d\'accueil est présent sur la page promotion', () => {
        expect(wrapper.find('#buttonBackHome').exists().valueOf()).toEqual(true);
    });

    it('Le champ description est présent sur la page promotion', () => {
        expect(wrapper.find('#descrPromotion').exists().valueOf()).toEqual(true);
    });

    it('Le champ date début est présent sur la page promotion', () => {
        expect(wrapper.find('#dateDebutPromotion').exists().valueOf()).toEqual(true);
    });

    it('Le champ date fin est présent sur la page promotion', () => {
        expect(wrapper.find('#dateFinPromotion').exists().valueOf()).toEqual(true);
    });

    it('Le champ pourcentage est présent sur la page promotion', () => {
        expect(wrapper.find('#pourcePromotion').exists().valueOf()).toEqual(true);
    })

});
