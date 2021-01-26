import  React from 'react';
import { AddCategoria } from '../../Componentes/AddCategoria';
import { shallow } from 'enzyme';

describe('Pruebas en el componente <AddCategoria/>', ()=>{
    
    const setData = jest.fn();
    let wrapper = shallow(<AddCategoria setData = {setData}/>);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategoria setData = {setData}/>);
    });
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target:{
            value: value
        }});
    });
    
    test('No debe de ´postear la informacion onSubmit ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setData).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setData y  limpiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const data = 'Luis Enrique';

        input.simulate('change', {target:{
            value: data
        }})

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setData).toHaveBeenCalled();
        expect(setData).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value')).toBe('');
    })
    
})