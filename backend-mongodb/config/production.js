module.exports = {
  env: 'production',

  database: {
    connection: 'mongodb://mongo:27017/production',
    transactions: false,
  },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: false,

  clientUrl:
    '<insert client url here>',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: 'c05b7a31-1653-4ebc-8de5-38315966c0ed',
};
