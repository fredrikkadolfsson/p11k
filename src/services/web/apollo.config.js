module.exports = {
  client: {
    includes: ['**'],
    service: {
      localSchemaFile: './schema.json',
      name: 'p11k',
      url: 'http://localhost:4000',
    },
  },
};
