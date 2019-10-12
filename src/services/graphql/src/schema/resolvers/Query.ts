const Query = {
  Query: {
    hello: (_: void, { name }: { name: string }): string => `Hello ${name || 'World!'}`,
  },
};

export default Query;
