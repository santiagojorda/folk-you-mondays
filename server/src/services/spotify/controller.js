const superagent = require('superagent')
const querystring = require('querystring')
const creds = require('./credentials')
const base64 = require('base-64');

// SPOTIFY ENDPOINTS
const SPOTY_AUTH_URL = 'https://accounts.spotify.com'
const SPOTY_API_URL = 'https://api.spotify.com'
const SPOTY_AUTH_PATH = SPOTY_AUTH_URL + '/authorize?'
const SPOTY_TOKEN_PATH = SPOTY_AUTH_URL + '/api/token'
const SPOTY_CURRENT_USER = SPOTY_API_URL + '/v1/me'
const SPOTY_USER_PLAYLISTS = SPOTY_CURRENT_USER + '/playlists'


let access_token = ''
let refresh_token = ''

const setHeader = (key, value) => {
    return (req) => {
      req.set(key,value)
      return req
    }
}
const encoded = base64.encode(`${creds.CLIENT_ID}:${creds.CLIENT_SECRET}`);
const setBasicAuthorizationHeader = setHeader('Authorization', 'Basic ' +  encoded)
const setJsonContentType = setHeader('Content-type', 'application/json')
const setFormContentType = setHeader('Content-Type', 'application/x-www-form-urlencoded')
const setBearerAuthorizationHeader = () => setHeader('Authorization', 'Bearer ' +  access_token)

module.exports.authSpotify = (req, res) => {
    console.log('AUTH')  
    res.redirect(SPOTY_AUTH_PATH +
      querystring.stringify({
        response_type: 'code',
        client_id: creds.CLIENT_ID,
        redirect_uri: creds.REDIRECT_URI,
        scope: creds.SCOPES
      })
    )
}

module.exports.callback = (req, res) => {
    let code = req.query.code || null;
    if (code === null) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } 
    
    else {
      superagent
        .post(SPOTY_TOKEN_PATH)
        .send({
          code: code,
          redirect_uri: creds.REDIRECT_URI,
          grant_type: 'authorization_code'
        })
        .use(setFormContentType)
        .use(setBasicAuthorizationHeader)
        .end((err, response) => {
          if (!err && response.statusCode === 200) {
            res.redirect(`http://localhost:3000/callback?`+ 
                querystring.stringify({
                    access_token: response.body.access_token,
                    refresh_token: response.body.refresh_token
                }))
          }
        });
    }
}