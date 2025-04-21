module.exports = {
  apps: [
    {
      name: "redestinea-staging",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "staging",
        PORT: 3001, // Puedes cambiar el puerto si prefieres
      },
    },
  ],
};
