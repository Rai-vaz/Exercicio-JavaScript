//criação de promessa
const div = document.querySelector("#test");
const div_modify = document.querySelector("#modify");
const div_erro = document.querySelector("#erro");

//a função Promise recebe 2 argumentos resolve, reject
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Raí';

    if (nome === 'Raí') {
        resolve('Usuário encontrado');
    } else {
        reject('O usuário não foi encontrado');
    }
});


const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Raí';

    if (nome === 'Raí') {
        resolve('Usuário encontrado');
    } else {
        reject('O usuário não foi encontrado');
    }
});

const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'João';

    if (nome === 'Raí') {
        resolve('Usuário encontrado');
    } else {
        reject('O usuário não foi encontrado');
    }
});


myPromise.then((data) => {
    div.innerText = data;
});

myPromise2.then((data) => {
    return data.toUpperCase()
}).then((stringModificada) => {
    div_modify.innerText = stringModificada;
});

myPromise3.then((data) => {
    console.log(data);
}).catch((erro) => {
    div_erro.innerText = "Algo deu errodo: " + erro;
})

//Resolvendo várias promessas
const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok');
    }, 3000)
});

const p2 = new Promise ((resolve, reject) => {
    resolve('P2 ok');
});

const p3 = new Promise ((resolve, reject) => {
    resolve('P3 ok');
});

//Resolvendo 3 promessas ao mesmo tempo
const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
})

//as promise pode demorar um tempo para serem resolvidas mas elas não para execução do códego
console.log('Depois do all')


//Resolvendo várias promessas com race, retorna o valor da primeira promise a ser resolvida
const p4 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok');
    }, 3000)
});

const p5 = new Promise ((resolve, reject) => {
    resolve('P5 ok');
});

const p6 = new Promise ((resolve, reject) => {
    resolve('P6 ok');
});

//Resolvendo 3 promessas ao mesmo tempo
const resolveAllRace = Promise.race([p4, p5, p6]).then((result) => {
    console.log(result);
})


//Exemplo real
const userName = 'Rai-vaz';
fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(`O nome do usuário é: ` + data.login)
}).catch((erro) => {
    console.log(`Algo deu errado ` + erro)
})






