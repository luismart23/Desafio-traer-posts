// 1. Realizar un request (consulta) a la API usando async-await.

// 2. Mostrar el resultado del request en HTML(utilizar listas desordenadas para mostrar
// cada uno de los post).

// 3. Manejar los posibles errores con try-catch.

const postCounter = { value: 0 };
let lastPostId = 0;

const getPosts = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${postCounter.value}&_limit=5`);// trae de a 5 posts de la API.
        const posts = await response.json();
        const results = document.getElementById('postData');

        const newPosts = posts.filter(item => item.id > lastPostId);

        newPosts.forEach((item) => {
            results.innerHTML += `<div class="post-container"><li>${item.id}, ${item.title}, ${item.body}</li></div>`; // clases con boostrap.
        });

        if (newPosts.length > 0) {
            lastPostId = newPosts[newPosts.length - 1].id;
        }

        postCounter.value += newPosts.length;
    } catch (error) {
        console.log(error);
    }
};

document.querySelector('button').addEventListener("click", getPosts);