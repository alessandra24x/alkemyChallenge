const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const handleResponse = async response => ({
    status: response.ok ? 'ok' : 'error',
    code: response.status,
    data: await response.json()
}) 

async function getPosts() {
    const response = await fetch(BASE_URL);
    return handleResponse(response);
}

async function getPostById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return handleResponse(response);;
}

async function createPost(post) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(post)
      });
    return handleResponse(response);;
}

async function updatePost(id, post) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(post)
      });
    return handleResponse(response);;
}

async function deletePost(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
      });
    return handleResponse(response);
}

export {getPosts, getPostById, createPost, updatePost, deletePost};