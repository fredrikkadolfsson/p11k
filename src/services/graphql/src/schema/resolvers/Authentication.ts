const Authentication = {
  Authentication: {
    isAuthenticated: (token: string): boolean => Boolean(token),
    token: (token: string): string => token,
  },
};

export default Authentication;
