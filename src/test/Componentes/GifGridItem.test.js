import React from 'react';
import { shallow } from 'enzyme';
import { GfGridItem } from '../../Componentes/GfGridItem';

describe('Prueba al componente <GifGridItem/>', () =>{
    const title = 'Un titulo';
    const url = 'https://localhost';
    const wrapper = shallow(<GfGridItem 
        title={title} url={url} />);

    test('Debe de generar los cards', ()=>{
            expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un parrafo con el title', () => {
            const parrafo = wrapper.find('p');
            expect(parrafo.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('el div debe tener  la clase card', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toBe('card');
    })
    
})