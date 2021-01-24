export const getEndPoint = async(categoria) =>{

    try {
        const key = '88yz2YdQzTg7C7BPOOFaEkHgPzBaRJRZ';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(categoria)}&limit=10`;
        const respuesta = await fetch(url);
        const jsonRespuesta = await respuesta.json();
        const resultadoBusqueda = jsonRespuesta.data;

        const personajes = resultadoBusqueda.map( img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            } 
        })
        return personajes;
    } catch (error) {
        return 'No existe esta personaje';
    }
}