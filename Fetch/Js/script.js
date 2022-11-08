const Url = "https://jsonplaceholder.typicode.com/posts";
const LoadingElement = document.querySelector("#loading");
const PostsContainer = document.querySelector("#posts-container");





//get all posts

async function getAllPosts() {
    const response = await fetch(Url);
    const data = await response.json();
    //adicionando classe na div
    LoadingElement.classList.add("hide");

    //percorrendo o objeto data
            //renomeando objeto data
    data.map((post) => {
        //criando elementos html
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const link = document.createElement('a');

        //atribuindo valores as tags
        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = 'Ler';
        link.setAttribute("href",`/post.html?id=${post.id}`);

        //inserindo todos os elementos criados no div 
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        //inserindo a div com os elementos dentro da div principal
        PostsContainer.appendChild(div);
    });
}

getAllPosts();



