// App config the for production environment.
// Do not require this directly. Use ./src/config instead.
export default {
    app: {
        title: 'Ditto Frontend',
        locale: {
            available: ['en', 'es'],
            default: 'es'
        }
    },
    api: {
        ditto_backend: {
            baseUrl: ''
        }
    },
    googleAnalytics: {
        enabled: true,
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID, // LIVE Property
        options: {
            debug: false
        }
    },
    facebookPixel: {
        enabled: true,
        id: '247941852357863'
    },
    crisp: {
        enabled: true,
        websiteID: '049630c3-f078-4289-997f-97893b01f723'
    },
    mailChimp: {
        signupFormPostURL: 'https://tienda765.us14.list-manage.com/subscribe/post'
    },
    switchPayments: {
        enabled: false,
        environment: 'https://api.switchpayments.com/v2/',
        publicKey: process.env.SWITCH_PUBLIC_KEY
    }
};
