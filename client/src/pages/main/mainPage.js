import { SignOut } from '../../components/buttons/spotifyLogin/btnSpotifyLogin'
import Playlist from '../../components/playlist/playlist'
import './mainPage.sass'

export default function MainPage(){
    
    const token = localStorage.getItem('access_token') 

    return (
        <>

            <Playlist />
            { (token !== null)
                ? <SignOut />
                : <> </>
            
            }
        
        </>
    )
}