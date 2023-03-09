export const getData = fetch(`https://dummyjson.com/products`)
.then(response => response.json())
.then(res=>res)
.catch(e=>e);


