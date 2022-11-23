(async () => {

    const Produto = require('./database/Produto');
    await Produto.sync();

    //adicionando produto no banco
    const novoProduto = await Produto.create({
        id: 4,
        nome: 'Mesa',
        preco: 250,
        descricao: 'Mesa para sala'
    });

    /*const listar = await Produto.findAll();*/
    /*const produto_alter = await Produto.findAll({
        where: {
            nome: 'Mouse USB'
        }
    });*/

    const produto_alter = await Produto.findByPk(4);

    produto_alter.descricao = "Outra alteração";
    await produto_alter.save();

    /*const listar = await Produto.findByPk(1)*/

    
    
})();