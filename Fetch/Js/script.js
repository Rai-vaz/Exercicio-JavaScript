const Url = "https://jsonplaceholder.typicode.com/posts";
const LoadingElement = document.querySelector("#loading");
const PostsContainer = document.querySelector("#posts-container");

//Elemento arquivo post.html
const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

//Elementos do form
const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

//Get id from url
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");


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
        link.setAttribute("href",`post.html?id=${post.id}`);

        //inserindo todos os elementos criados no div 
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        //inserindo a div com os elementos dentro da div principal
        PostsContainer.appendChild(div);
    });
}


async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${Url}/${id}`),
        fetch(`${Url}/${id}/comments`)
    ]);

    //desfraguimentação
    const dataPost = await responsePost.json();
    const dataComments = await responseComments.json();

    LoadingElement.classList.add("hide");
    postPage.classList.remove("hide");

    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);

    dataComments.map((comment) => {
        createComment(comment);
    });

}


function createComment(comment) {
    const div = document.createElement("div");
    const email = document.createElement("h3");
    const commentBody = document.createElement("p");

    email.innerText = comment.email;
    commentBody.innerText = comment.body;

    div.appendChild(email);
    div.appendChild(commentBody);

    commentsContainer.appendChild(div);
}

async function postComment(comment) {
    const response = await fetch(`${Url}/${postId}/comments`,{
        method: "POST",
        body: comment,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    createComment(data);
    emailInput.value = '';
    bodyInput.value = '';
}


if (!postId) {
    getAllPosts();
} else {
    getPost(postId);

    //add event to comment form
    commentForm.addEventListener("submit",(e) => {
        e.preventDefault();

        let comment = {
            email: emailInput.value,
            body: bodyInput.value
        };

        comment = JSON.stringify(comment);
        postComment(comment);
    });
}



