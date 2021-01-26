import React from 'react';
import { RestApi } from '../../Componentes/RestApi';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs');


describe('Hacemos el test del RestApi ', () => {
    const categoria = "Goku";

    test('se debe mostrar correctamente ', () => {
      
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<RestApi categoria={categoria}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar items cuando se carga imagenes useFetchGifs', () => {
        const imgs = [{
            id: 'ABC',
            url: 'https://localhost',
            title: 'Cualquier Cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const wrapper = shallow(<RestApi categoria={categoria}/>);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GfGridItem').length).toBe(imgs.length);
    })
    
});