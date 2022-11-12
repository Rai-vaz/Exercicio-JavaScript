const {Sequelize, DataTypes} = require('sequelize');
//configuração do acesso do banco
const acessConfig = require('../config/database');
//conectado ao banco
const connect = new Sequelize(acessConfig);



//criando um modelo de tabela
const Produto = connect.define('Produto', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: DataTypes.DECIMAL,
    descricao: DataTypes.STRING
});

module.exports = Produto;