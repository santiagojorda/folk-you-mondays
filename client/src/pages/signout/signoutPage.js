import './signoutPage.sass'

export default function SignoutPage() {

    localStorage.clear()
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