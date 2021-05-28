const API = 'http://localhost:5000/trending';
    
export function getShoes() {
    let url = API;
    return fetch(url)
    .then( (response) => response.json() );
}