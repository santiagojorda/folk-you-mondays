import './songList.sass'

export default function SongList(props){


    return (
        <ul className='song-list'>
            {props.list.map((song, index) => {
                return (
                    <li key={index}>
                        <div className="left song-container">
                            <p>{ (index+1).toString().padStart(2, "0")}</p>
                        </div>
                        <div className="right song-container">
                            <p className='name'>{song.name}</p>
                            <p className='album'>{song.album}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}