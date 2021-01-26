import { useFetchGifs } from '../../Hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba con el hook useFetchGif', () =>{
   
    test('Debe de retornar el estado inicial ', async() => {
       const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('vegeta') );
       const {data, loading} = result.current;

       await waitForNextUpdate();
       
       expect(data).toEqual([]);
       expect(loading).toBe(true);
    })
    
    test('Debe retornar un arreglo de imgs y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('vegeta') );
        await waitForNextUpdate();
        const {data, loading} = result.current;

       expect(data.length).toEqual(data.length);
       expect(loading).toBe(false);
    })
    
});