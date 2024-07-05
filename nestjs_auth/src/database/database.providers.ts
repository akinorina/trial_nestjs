import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'nestjs',
  password: 'nestjs',
  database: 'nestjs',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: false,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
