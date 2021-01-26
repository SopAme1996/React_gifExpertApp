import React from 'react';
import { GiffApp } from './GiffApp';
import { shallow } from 'enzyme';

describe('Test de giffApp', () => {
    

    test('Test del componente padre de los otros componentes', () => {
        const wrapper = shallow(<GiffApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de mostrar una lista de categorias ', () => {
        const categorias = ['vegeta', 'goku'];
        const wrapper = shallow(<GiffApp defaultCategoria={categorias}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('RestApi').length).toBe(categorias.length);
    })
    
});