import './btnSpotifyLogin.sass'


export function SessionButton(props) {
    return (
        <>
            <button onClick={props.handleClick}>{props.text}</button>
        </>
    )
}

export function LoginBtn() {

    const login = () => {
        window.location = 'http://localhost:4000/spotify/login'
    }

    return (
        <>
          <SessionButton text="login" handleClick={login}/>
        </>
    )
}

export function SignOut() {

    const signout = () => {
        window.location = 'http://localhost:3000/signout'
    }

    return (
        <>
          <SessionButton text="signout" handleClick={signout}/>
        </>
    )

}