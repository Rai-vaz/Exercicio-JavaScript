const div = document.querySelector("#test");
const div_start = document.querySelector("#start");
const div_end = document.querySelector("#end");



//depois de 2 segundos ela retorna o resultado
function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            div.innerText = 'Esperou isso aqui';
            //para resolver a promise
            resolve();
        }, 2000);
        
    });
}

//await só pode ser usado em função async
async function segundaFuncao() {
    div_start.innerText = 'Iniciou';
    /*await serve para dar um pause na execução do código e esperar
    uma resposta para continuar*/
    await primeiraFuncao();
    div_end.innerText = 'Terminou';

}

//segundaFuncao();

//Prática
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(erro => console.log(erro));
}

async function showUserName(id) {
    //trantando erro em funções assícronas
    try {
        const user = await getUser(id);
        div.innerText = user.data.email;
    } catch (error) {
        console.log('Erro: ' + error)
    }
}

showUserName(1);