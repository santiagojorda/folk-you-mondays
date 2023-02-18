import { SignOut } from '../../components/buttons/spotifyLogin/btnSpotifyLogin'
import Playlist from '../../components/spotify/playlist/playlist'
import './mainPage.sass'
import spotyStorage from '../../utils/spotifyStorageManager'

export default function MainPage(){

    return (
        <>

            <Playlist />
            { (spotyStorage.thereIsRefreshToken())
                ? <SignOut />
                : <> </>
            }
        
        </>
    )
}