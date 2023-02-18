module.exports = { 
    CLIENT_ID: '0ece02e20ae944569ace522d77657e05', // Your client id
    CLIENT_SECRET: 'c882726cc2dc432484685cae9b0e766e', // Your secret
    REDIRECT_URI: `http://${process.env.HOST}:${process.env.PORT}/spotify/callback`,// Your redirect url
    SCOPES: '' // Your scopes
}
