import Sequelize from 'sequelize';

const { Model } = Sequelize;

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        usuario: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        senha: Sequelize.VIRTUAL,
        passwordHash: {
          type: Sequelize.STRING,
        },
        cargo: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        codUsuario: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      },
      {
        sequelize,
        tableName: 'Usuario',
        schema: 'pdvweb',
      },
    );

    return this;
  }
}

export default Usuario;
