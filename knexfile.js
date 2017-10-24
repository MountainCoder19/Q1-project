// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/mouthful'
  },

  production: {
    client: 'postgresql',
    connection:  process.env.DATABASE_URL
  }
};
