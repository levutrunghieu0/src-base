import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      sequelize.addModels([User]);
      await sequelize.sync({
        force: Boolean(process.env.FORCE),
        alter: Boolean(process.env.ALTER),
      });
      return sequelize;
    },
  },
];
