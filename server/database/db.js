import KnexBuilder from 'knex';

export const dbConnection= new KnexBuilder({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: 'test2',
    user: 'postgres',
    port: 5432,
    password: 'paramore100',
    application_name: 'cad',
    charset: 'utf8',
  },
});
