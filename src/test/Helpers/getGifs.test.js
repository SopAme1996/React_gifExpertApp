import { getEndPoint } from '../../helpers/getGifs';

describe('pruebas con getGifs Fetch', () => {

    test('debe traer 10 elementos', async() => {
        const gifs = await getEndPoint('goku');
        expect(gifs.length).toBe(10)
    })

    test('debe traer 10 elementos', async() => {
        const gifs = await getEndPoint('');
        expect(gifs.length).toBe(0)
    })
    
})