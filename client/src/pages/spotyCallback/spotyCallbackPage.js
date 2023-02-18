import './spotyCallbackPage.sass'
import { useLocation } from 'react-router-dom'
import spotyStorage from '../../utils/spotifyStorageManager'

export default function SpotyCallbackPage(){

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const access_token = searchParams.get('access_token')
    const refresh_token = searchParams.get('refresh_token')
    const expires_in = searchParams.get('expires_in')

    console.log(access_token)
    console.log(refresh_token)
    console.log(expires_in)

    spotyStorage.saveTokens(access_token, refresh_token, expires_in)
    
    window.location = 'http://localhost:3000/'

    return (
        <>

        </>
    )
}