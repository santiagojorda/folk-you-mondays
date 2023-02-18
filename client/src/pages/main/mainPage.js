import Playlist from '../../components/playlist/playlist'
import './mainPage.sass'

export default function MainPage(){
    
    const token = localStorage.getItem('access_token') 

    const signout = () => {
        window.location = 'http://localhost:3000/signout'
    }

    return (
        <>

            <Playlist />
            { (token !== null)
                ? <button onClick={signout}>Signout</button>
                : <> </>
            
            }
        
        </>
    )
}