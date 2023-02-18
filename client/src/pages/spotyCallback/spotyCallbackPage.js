import './spotyCallbackPage.sass'
import { useLocation } from 'react-router-dom'

export default function SpotyCallbackPage(){

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const access_token = searchParams.get('access_token')
    const refresh_token = searchParams.get('refresh_token')
    const expires_in = searchParams.get('expires_in')

    console.log(access_token)
    console.log(refresh_token)
    console.log(expires_in)

    const date_today = new Date().getTime() 
    const date_expirecy = date_today + (expires_in * 1000)

    localStorage.setItem('access_token', access_token)
    localStorage.setItem('refresh_token', refresh_token)
    localStorage.setItem('expires_in', date_expirecy)
    
    window.location = 'http://localhost:3000/'

    return (
        <>

        </>
    )
}