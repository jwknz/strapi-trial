module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://localhost'),
  proxy: true,
  admin: {
    url: env('ADMIN', 'http://localhost/admin'),
    autoOpen: false
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
