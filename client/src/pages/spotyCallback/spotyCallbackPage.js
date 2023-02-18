import './spotyCallbackPage.sass'
import { useLocation } from 'react-router-dom'

export default function SpotyCallbackPage(){
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const access_token = searchParams.get('access_token')
    const refresh_token = searchParams.get('refresh_token')
    console.log(access_token)
    console.log(refresh_token)

    localStorage.setItem('access_token', access_token)
    localStorage.setItem('refresh_token', refresh_token)
    window.location = 'http://localhost:3000/'
    return (
        <>

        </>
    )
}