import './playlist.sass'
import SongList from './songList/songList'

const songList = [
    { name: "Bohemian Rhapsody", album: "A Night at the Opera", duration: "5:55" },
    { name: "Stairway to Heaven", album: "Led Zeppelin IV", duration: "8:02" },
    { name: "Hotel California", album: "Hotel California", duration: "6:31" },
    { name: "Imagine", album: "Imagine", duration: "3:04" },
    { name: "Thriller", album: "Thriller", duration: "5:57" },
    { name: "Bohemian Rhapsody", album: "A Night at the Opera", duration: "5:55" },
    { name: "Stairway to Heaven", album: "Led Zeppelin IV", duration: "8:02" },
    { name: "Hotel California", album: "Hotel California", duration: "6:31" },
    { name: "Imagine", album: "Imagine", duration: "3:04" },
    { name: "Thriller", album: "Thriller", duration: "5:57" },
]

const playlist = {
    cover: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'
}

export default function Playlist(){

    const token = localStorage.getItem('access_token') 
    const login = () => {
        window.location = 'http://localhost:4000/spotify/login'
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 left"> 
                        <img src={playlist.cover} alt="" />
                    </div>
                    <div className="col-6 right">
                        { 
                            (token !== null) 
                                ? <SongList list={songList}/>
                                : <button onClick={login}>Login</button>
                        }
                    </div>
                </div>
            </div>
        
        </>
    )
}