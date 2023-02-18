import './spotifyPlayer'

export default function SpotifyPlayer() {

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://sdk.scdn.co/spotify-player.js"
        script.async = true
        document.body.appendChild(script);
        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = 'BQCYMLMSjOs--LhyU4w7_v7CgPEkDX_b3tiuN1k9IB7QgP6iJMHCpVST8TwKPJwFaqnTPoz3M-bRrhlMw0RuDUbWxP2cr0Ii4X-9OsKdEA4vAKXyMAQ5b0INlmkgaZ-LTgjAJLiDMoppW6FBNj270FT2sIV3ch8g3_zyvl9BYkq7oPZI9t6IL7Oyf_fVK0wc3y1-dg'
            const player = new Spotify.Player({
              name: 'Folk You Mondays App',
              getOAuthToken: cb => { cb(token); },
              volume: 0.5
            })}
        return () => {
          document.body.removeChild(script)
        }
    }, []);


    return (
        <>
        
        </>
    )
} 