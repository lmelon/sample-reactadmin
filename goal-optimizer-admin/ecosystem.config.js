module.exports = {
  apps : [
    {
      name: 'STATIC',
      script: 'serve',
      
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '100M',
  
      env: {
        NODE_ENV: 'development',
        PM2_SERVE_PATH: "gui/",
        PM2_SERVE_PORT: 5000,
      },

      env_production: {
        NODE_ENV: 'production',
        PM2_SERVE_PATH: "gui/",
        PM2_SERVE_PORT: 5000,
      }

    }
  ]
};
