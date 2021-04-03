 // Obtiene gifs.
 export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=5&api_key=L8IKMEkVVgxe0q1QcdLg4nuBw1DAT8ti`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}