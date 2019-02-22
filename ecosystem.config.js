module.exports = {
  apps : [{
    name: 'fakerql',
    script: 'src/index.ts',
    cwd: '/root/fakerql/',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development',
      JWT_SECRET: '123',
      PORT: 80,
    },
    env_production: {
      NODE_ENV: 'production',
      JWT_SECRET: '123',
      PORT: 80,
    }
  }],
};
