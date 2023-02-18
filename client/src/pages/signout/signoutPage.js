import './signoutPage.sass'
import spotyStorage from '../../utils/spotifyStorageManager'

export default function SignoutPage() {

    spotyStorage.clearTokens()
    window.location = 'http://localhost:3000'

    const redireccionar = () =>{
        window.location = 'http://localhost:3000'
    }
    return (
        <>
            <button onClick={redireccionar}>Ir a otra página</button>
        </>
    )

}