const getAll = () => fetch('http://localhost:3000/books/')
        .then(x => x.json())
        .catch(x => console.log(x));

export default {
    getAll
}