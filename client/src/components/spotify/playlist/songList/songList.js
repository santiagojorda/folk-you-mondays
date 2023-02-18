import './songList.sass'

export default function SongList(props){

    function renderList() {
        return (
            <>
                {props.list.map((song, index) => {

                    return (
                        <li key={index}>
                            <div className="left song-container">
                                <p>{ (index+1).toString().padStart(2, "0")}</p>
                            </div>
                            <div className="right song-container">
                                <p className='name'>{song.track.name}</p>
                                <p className='album'>{song.track.artists[0].name}</p>
                            </div>
                        </li>
                    )
                })}
            
            </>
        )
    }

    return (
        <ul className='song-list'>
           {
            (   props.list)
                ? renderList()
                : <></>
            }
        </ul>
    )
}