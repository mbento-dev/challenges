// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite"
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
  },
  
  test: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.mock.sqlite"
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds/mock'
    },
  }

};
