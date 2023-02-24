module.exports = {
  apps: [
    {
      name: 'NextAppName',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: 'node_modules/next/dist/bin/next start -- -p 3000',
    },
  ],
};
