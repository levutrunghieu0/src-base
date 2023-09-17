import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '220897',
        database: 'test',
      });
      sequelize.addModels([User]);
      await sequelize.sync({ force: true, alter: true });
      return sequelize;
    },
  },
];
