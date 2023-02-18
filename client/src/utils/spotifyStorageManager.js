const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'
const TOKEN_EXPIRATION = 'token_expiration'

function _saveItem(name, value){
    return localStorage.setItem(name, value)
}

function _getItem(name){
    return localStorage.getItem(name)
}

function _removeItem(name){
    return localStorage.removeItem(name)
}

class SpotifyStorageManager{

    static saveTokens(_newAccessToken, _newRefreshToken, _expiration){
        this.saveAccessToken(_newAccessToken, _expiration)
        _saveItem(REFRESH_TOKEN, _newRefreshToken)
    }

    static saveAccessToken(_newAccessToken, _expiration){
        _saveItem(ACCESS_TOKEN, _newAccessToken)
        
        const date_today = new Date().getTime() 
        const date_expirecy = date_today + (_expiration * 1000)
        _saveItem(TOKEN_EXPIRATION, date_expirecy)
    }

    static clearTokens(){
        _removeItem(ACCESS_TOKEN)
        _removeItem(REFRESH_TOKEN)
        _removeItem(TOKEN_EXPIRATION)
    }

    static getAccessToken(){
        return _getItem(ACCESS_TOKEN)
    }

    static getRefreshToken(){
        return _getItem(REFRESH_TOKEN)
    }

    static getTokenExpirationDate(){
        return _getItem(TOKEN_EXPIRATION)
    }

    static thereIsRefreshToken(){
        /* 
            existe refresh?
                ? expiro?
                    ? pedir token
                        ? ok true
                        : false borrar 
                    : true
                : false

        
        */
        return !!(this.getRefreshToken())
    }
} 

export default SpotifyStorageManager