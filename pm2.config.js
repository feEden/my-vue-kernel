module.exports = {
    apps: [{
        name: 'my_vue_kernel',
        script: './dist/app.js',

        instances: "max",
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};