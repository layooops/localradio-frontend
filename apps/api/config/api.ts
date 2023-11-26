const apiConfig = {
  responses: {
    privateAttributes: ['_v', 'id', 'created_at'],
  },
  rest: {
    defaultLimit: 999999,
    maxLimit: 999999,
    withCount: true,
  },
};

export default apiConfig;
