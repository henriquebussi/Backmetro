const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const TurmasUsuarios = sequelize.define(
    "turmas_usuarios", {
        idTipos_Usuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true, // Define essa coluna como a chave primária
            autoIncrement: true, // Indica que é uma chave primaria autoincrementável
          },
          descricao: Sequelize.STRING,
    },
    {
        timestamps: false, // Adiciona colunas createdAt e updatedAt automaticamente
      }
)

module.exports = TurmasUsuarios;
