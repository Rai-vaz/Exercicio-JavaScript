const div = document.querySelector("#test");

const obj = [
    {
        nome: 'Raí vaz',
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'empresa x'
        },
        hobbies: ['progrmar', 'Correr', 'Ler'],
    },

    {
        nome: 'João',
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies: ['Jogar', 'Academia', 'Cozinhar'],
    }

];

//Transformando um objeto js para JSON com metodo JSON.stringfy()
const JsonData = JSON.stringify(obj)
console.log(typeof JsonData)
console.log(JsonData)

//Transformando string JSON em objeto com o metodo parse()
const objData = JSON.parse(JsonData);
console.log(typeof objData)
console.log(objData)


//O map só funciona em obj JS
            //renomeando cada item do objeto
objData.map((pessoa) => {
    console.log(pessoa.detalhes_profissao.profissao)
})