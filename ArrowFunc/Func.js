//ARROW FUNCTION


//SINTAXE
(a, b) => {
    return a + b;
}

//ou

(a, b) => a + b

let a = 4;
let b = 10;

let c = (num1, num2) => num1 + num2;

console.log(c(a,b))

let d = (x, y) => {
    let op;

    if (x >= 5) {
        op = x * y;
    }else{
        op = x / y;
    }

    return op;
}

console.log(d(a,b))

let frase = 'O Raí é um ótimo Dev'

//Função com argumento
let fraseArray = (arg) => arg.split(' ')

console.log(fraseArray(frase))

//Função sem argumento
let semArg = () => console.log("Não tem argumento")

semArg()


let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'Calção', preco: 20, cor: 'Verde'}
];

let precoMaiorQ50 = roupas.filter((roupa) => {
    return roupa.preco >= 50;
})

console.log(precoMaiorQ50)


//NÃO USAR ARROW FUNCTIONS NESSES CASOS
let pessoa = {
    nome: 'Matheus',
    //assim não funciona
    /*sayName: () => {
        console.log(this.nome)
    }*/
    /*sayName(){
        console.log(this.nome)
    }*/

    // ou assim
    sayName: function(){
        console.log(this.nome)
    }
}

pessoa.sayName();

//arrow não funciona nesse caso
let btn = document.getElementById('bt')
btn.addEventListener('click', function() {
    this.classList.toggle('classe');
})


//Nullish Coalescing Operator
//Para o java script os valores 0,' ', false, null são valores falsy quando usamos no operador ||

// ??
//apenas os valores null, undefined
const idade = 0;

document.body.innerText = "Sua idade é "+(idade ?? 'Não informado');


//OBJETOS
const user = {
    nome: "Raí",
    idade: 24,
    endereco:{
        Rua: 'Pedro Gomes',
        numero: 25,
    }
};


//EXPRESSÕES
//in retorna true ou false
//Object.keys retorna todas as chaves o array
//Object.value retorna os valores das chaves do array
//Object.entries mostar chave e valor do arry
//JSON.stringfy mostra melhor um array na tela


//document.body.innerText = ('outro' in user)
//document.body.innerText = Object.keys(user)
//document.body.innerText = Object.values(user)
//document.body.innerText = JSON.stringify(Object.values(user))
document.body.innerText = JSON.stringify(Object.entries(user))











