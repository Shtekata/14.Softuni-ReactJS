let url = 'http://localhost:6500/pets';

export const getAll = (category = 'All') => {
    const currentUrl = url + (category !== 'All' ? `?category=${category}` : '');
    return fetch(currentUrl)
        .then(x => x.json())
        .catch(x => console.log(x));
};

export const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(x => x.json())
        .catch(x => console.log(x))
};

export const create = (x) => {
    const { name, description, imageURL, category } = x;
    const pet = { name, description, imageURL, category, likes: 0 };
    return fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
    });
};

export const update = (x) => {
    return fetch(`${url}/${x.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(x)
    })
        .catch(x => console.log(`Error: ${x}`));
}