module.exports = ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                localServer: {
                    maxage: 300000
                },
            },
        },
    },
    sentry: {
        enabled: true,
        config: {
            dsn: env('SENTRY_DSN'),
            sendMetadata: true,
        },
    },
    'strapi-plugin-populate-deep': {
        config: {
            defaultDepth: 5, // Default is 5
        }
    },
    'preview-button': {
        config: {
            openTarget: '_blank',
            contentTypes: [
                {
                    uid: 'api::post.post',
                    published: {
                        url: 'http://localhost:1337',
                        copy: false,
                    },
                }
            ],
        },
    },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
                // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: 'abhishah0196@gmail.com',
                defaultReplyTo: 'abhishah0196@gmail.com',
            },
        },
    },
});