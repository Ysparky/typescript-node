const dbConfig = {
  development: {
    username: 'root',
    password: 'root',
    host: 'localhost',
    database: 'test_db',
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
};

export default dbConfig;
